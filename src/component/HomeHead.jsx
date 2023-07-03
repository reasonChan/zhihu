import React, {useMemo} from "react";
import avatar from '../assets/images/default.png'
import './HomeHead.less'
const HomeHead = function HomeHead(props) {
    let { timeStamp } = props;
    let time = useMemo(() => {
        const date = new Date(timeStamp)
        const monthDict = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        let month = monthDict[date.getMonth()]
        let day = date.getDay().toString().padStart(2, '0')
        return { month, day }
    }, [timeStamp])
    return (
        <header className="home-head-box">
            <div className="info">
                <div className="time">
                    <span>{time.day}</span>
                    <span>{time.month}</span>
                </div>
                <h2 className="title">知乎日报</h2>
            </div>
            <div className="picture">
                <img src={avatar} alt=""/>
            </div>
        </header>
    );
};
export default HomeHead;
