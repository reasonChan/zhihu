import React, { useState } from "react";
import HomeHead from "../component/HomeHead";
import { Swiper } from "antd-mobile";
import {Link} from "react-router-dom";
import './Home.less'

const Home = function Home() {
    let [timeStamp, setTimeStamp] = useState(()=>Date.now())
    return (
        <div className="home-box">
            <HomeHead timeStamp={timeStamp}/>
            <div className="swiper-box">
                <Swiper>
                    <Swiper.Item>
                        <Link to="/detail/xxx">
                            <img src="https://pic3.zhimg.com/v2-dddad52a59edd956a141b2bceee7da8a_fhd.jpg" alt=""/>
                            <div className="desc">
                                <h3 className="title">小事-你们家的猫做过什么令你感动的事？</h3>
                                <p className="author">作者 找学号</p>
                            </div>
                        </Link>
                    </Swiper.Item>
                    <Swiper.Item>
                        <Link to="/detail/xxx">
                            <img src="https://pic3.zhimg.com/v2-dddad52a59edd956a141b2bceee7da8a_fhd.jpg" alt=""/>
                            <div className="desc">
                                <h3 className="title">小事-你们家的猫做过什么令你感动的事？</h3>
                                <p className="author">作者 找学号</p>
                            </div>
                        </Link>
                    </Swiper.Item>
                    <Swiper.Item>
                        <Link to="/detail/xxx">
                            <img src="https://pic3.zhimg.com/v2-dddad52a59edd956a141b2bceee7da8a_fhd.jpg" alt=""/>
                            <div className="desc">
                                <h3 className="title">小事-你们家的猫做过什么令你感动的事？</h3>
                                <p className="author">作者 找学号</p>
                            </div>
                        </Link>
                    </Swiper.Item>
                </Swiper>
            </div>
        </div>
    )
}
export default Home
