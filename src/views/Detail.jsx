import React, {useEffect, useState} from "react";
import {LeftOutline, LikeOutline, MessageOutline, MoreOutline, StarOutline} from 'antd-mobile-icons'
import {Badge} from "antd-mobile";
import './Detail.less'
import SkeletonAgain from "../component/SkeletonAgain";
import api from '../api';
import {flushSync} from "react-dom";
const Detail = function Detail(props) {
    let { navigate, params } = props;
    let [info, setInfo] = useState(null);
    let [extra, setExtra] = useState(null);
    let link = null;
    const handleStyle = result => {
        let { css } = result;
        if(!Array.isArray(css)) return;
        css = css[0];
        if(!css) return;
        link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = css;
        document.head.appendChild(link);
    }
    const handleImage = result => {
        let imgPlaceHolder = document.querySelector('.img-place-holder');
        if(!imgPlaceHolder) return;
        let tempImg = new Image;
        tempImg.src = result.image;
        tempImg.onload = () => {
            imgPlaceHolder.appendChild(tempImg);
        }
        tempImg.onerror = () => {
            let parent = imgPlaceHolder.parentNode;
            parent.parentNode.removeChild(parent);
        }
    }
    useEffect(() => {
        (async () => {
            try {
                let result = await  api.queryNewsInfo(params.id);
                flushSync(() => {
                    setInfo(result);
                    handleStyle(result);
                });
                handleImage(result);
            } catch (_) { }
        })();
        //销毁组件
        return () => {
            if(link) document.head.removeChild(link)
        }
    }, []);
    useEffect(() => {
        (async () => {
            try {
                let result = await  api.queryStoryExtra(params.id);
                setExtra(result);
            } catch (_) { }
        })();
    }, [])
    return (
        <div className="detail-box">

            {/*新闻内容*/}
            {
                !info ? <SkeletonAgain /> :
                    <div className="content" dangerouslySetInnerHTML={{__html: info.body}}></div>
            }


            {/*底部图标*/}
            <div className="tab-bar">
                <div
                    className="back"
                    onClick={() => { navigate(-1) }}
                >
                    <LeftOutline/>
                </div>
                <div className="icons">
                    <Badge content={extra ? extra.comments : 0}><MessageOutline /></Badge>
                    <Badge content={extra ? extra.popularity : 0}><LikeOutline /></Badge>
                    <span className="stored"><StarOutline /></span>
                    <span><MoreOutline /></span>
                </div>
            </div>
        </div>
    )
}
export default Detail
