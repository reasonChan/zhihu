import React, {useState} from "react";
import {Button} from "antd-mobile";

const ButtonAgain = function ButtonAgain(props) {
    let options = { ...props };
    let { children, onClick: handle } = options;
    delete options.children;
    delete options.onClick;

    let [loading, setLoading] = useState(false);

    const clickHandle = async () => {
        setLoading(true);
        await handle();
        setLoading(false);
    };

    return (
        <Button {...options} loading={loading} onClick={clickHandle}>
            {children}
        </Button>
    )
}
export default ButtonAgain
