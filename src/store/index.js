import { createStore, applyMiddleware } from "redux";
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reducer from './reducer'

//根据不同环境使用不同中间件
let middleware = [reduxThunk, reduxPromise]
const env = process.env.NODE_ENV
if (env === 'development') {
    middleware.push(reduxLogger)
}

//创建store容器
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)
export default store
