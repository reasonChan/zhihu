import React, {useEffect, useRef, useState} from "react";
import HomeHead from "../component/HomeHead";
import {Divider, DotLoading, Image, Swiper} from "antd-mobile";
import {Link} from "react-router-dom";
import './Home.less'
import NewsItem from "../component/NewsItem";
import SkeletonAgain from "../component/SkeletonAgain";
import api from '../api';

const Home = function Home() {
    let [timeStamp, setTimeStamp] = useState(Date.now());
    let [bannerData, setBannerData] = useState([]);
    let [newsList, setNewsList] = useState([]);
    let loadMore = useRef()
    useEffect(() => {
        (async () => {
            try {
                let { date, stories, top_stories } = await api.queryNewsLatest();
                setTimeStamp(date);
                setBannerData(top_stories);
                newsList.push({
                    date,
                    stories
                });
                setNewsList([...newsList]);
            }catch (e) {}
        })()
    }, [])
    // 设置监听器实现触底加载
    useEffect(() => {
        let ob = new IntersectionObserver(async changes => {
            let { isIntersecting } = changes[0];
            if(isIntersecting) {
                try {
                    let time = newsList.at(-1)['date'];
                    let res = await api.queryNewsBefore(time);
                    setNewsList([...newsList, res]);
                }catch (e){
                }
            }
        })
        let loadMoreBox = loadMore.current;
        ob.observe(loadMore.current);

        return () => {
            ob.unobserve(loadMoreBox);
            ob = null;
        }
    }, [])
    return (
        <div className="home-box">
            <HomeHead timeStamp={timeStamp} />
            {/*轮播图*/}
            <div className="swiper-box">
                {bannerData.length > 0 ? <Swiper autoplay={true} loop={true}>
                    {bannerData.map(item => {
                        let { id, image, title, hint } = item;
                        return <Swiper.Item key={id}>
                            <Link to={{ pathname: `/detail/${id}` }}>
                                <Image src={image} lazy />
                                <div className="desc">
                                    <h3 className="title">{title}</h3>
                                    <p className="author">{hint}</p>
                                </div>
                            </Link>
                        </Swiper.Item>;
                    })}
                </Swiper> : null}
            </div>
            {/*新闻列表*/}
            {
                newsList.length === 0 ? <SkeletonAgain/> :
                <>
                    {
                        newsList.map((item, index) => {
                            let {date, stories} = item;
                            return (
                                <div className="news-box" key={date}>
                                    {
                                        index !== 0 ?
                                            <Divider contentPosition="left">{date}</Divider> :
                                            null
                                    }
                                    <div className="list">
                                        {
                                            stories.map(cur => {
                                                return (
                                                    <NewsItem key={cur.id} info={cur}/>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }

            {/*加载更多*/}
            <div
                className="load-box"
                ref={loadMore}
                style={{
                    display: newsList.length === 0 ? 'none' : 'block'
                }}
            >
                <DotLoading/>
                数据加载中
            </div>
        </div>
    )
}
export default Home
