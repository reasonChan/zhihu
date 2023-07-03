import React, { useState } from "react";
import HomeHead from "../component/HomeHead";
const Home = function Home() {
    let [timeStamp, setTimeStamp] = useState(()=>Date.now())
    return (
        <div className="home-box">
            <HomeHead timeStamp={timeStamp}/>
        </div>
    )
}
export default Home
