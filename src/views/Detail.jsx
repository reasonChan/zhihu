import React from "react";
import {LeftOutline, LikeOutline, MessageOutline, MoreOutline, StarOutline} from 'antd-mobile-icons'
import {Badge} from "antd-mobile";
import './Detail.less'
import api from '../api';
const Detail = function Detail(props) {
    let { navigate } = props;
    return (
        <div className="detail-box">
            {/*新闻内容*/}
            <div className="content"></div>

            {/*底部图标*/}
            <div className="tab-bar">
                <div
                    className="back"
                    onClick={() => { navigate(-1) }}
                >
                    <LeftOutline/>
                </div>
                <div className="icons">
                    <Badge content="128"><MessageOutline /></Badge>
                    <Badge content="29"><LikeOutline /></Badge>
                    <span><StarOutline /></span>
                    <span><MoreOutline /></span>
                </div>
            </div>
        </div>
    )
}
export default Detail
