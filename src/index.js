import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'lib-flexible'
import './index.less'

/*  REDUX    */
import { Provider } from "react";
import store from './store'

/*  ANTD-MOBILE    */
import { ConfigProvider } from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";
/*  处理最大宽度    */
(function () {
    const handleMax = function handleMax() {
        const html = document.documentElement;
        const root = document.getElementById('root');
        const deviceWidth = html.clientWidth;
        root.style.maxWidth = "750px";
        if(deviceWidth >= 750) {
            html.style.fontSize = '75px'
        }
    }
    handleMax()
})()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
