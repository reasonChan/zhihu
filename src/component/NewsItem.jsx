import React from "react";
import {Image} from "antd-mobile";
import {Link} from "react-router-dom";
const NewsItem = function NewsItem(props) {
    let { info } = props;
    if(!info) return null;
    let { id, title, hint, images } = info;
    if(!Array.isArray(images)) images = [""];
    return (
        <div className="news-item-box">
            <Link to={{ pathname: `/detail/${id}` }}>
                <div className="content">
                    <h4 className="title">{title}</h4>
                    <p className="author">{hint}</p>
                </div>
                <Image src={images[0]} lazy />
            </Link>
        </div>
    );
};
export default NewsItem;
