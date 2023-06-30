import React, {Suspense} from "react";
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import routes from "./routes"
import { DotLoading } from 'antd-mobile'
/* 统一路由配置 */
const Element = function Element(props) {
    let { component: Componnent, meta } = props;
    let { title = "知乎日报-WebApp" } = meta || {}
    document.title = title
    const navigate = useNavigate(),
        location = useLocation(),
        params = useParams(),
        [usp] = useSearchParams();
    return (
        <Componnent
            navigate={navigate}
            location={location}
            params={params}
            usp={usp}
        />
    );
}
export default function RouterView() {
    return (
        <Suspense fallback={
            <DotLoading color='primary' />
        }>
            <Routes>
                {
                    routes.map(item => {
                        let { name, path } = item;
                        return (
                            <Route
                                key={name}
                                path={path}
                                element={<Element {...item}/>}
                            >
                            </Route>
                        )
                    })
                }
            </Routes>
        </Suspense>
    )
}
