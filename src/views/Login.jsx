import React, {useState} from "react";
import NavBarAgain from "../component/NavBarAgain";
import ButtonAgain from "../component/ButtonAgain";
import './Login.less'
import {Button, Form, Input, Toast} from "antd-mobile";

const Login = function Login() {
    /*        表单校验规则        */
    const validate = {
        phone(_, value) {
            value = value.trim();
            let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
            if(value.length === 0) return Promise.reject(new Error('手机号是必填项！'));
            if(!reg.test(value)) return Promise.reject(new Error('手机号格式错误！'));
            return Promise.resolve();
        },
        code(_, value) {
            value = value.trim();
            let reg = /^\d{6}$/;
            if(value.length === 0) return Promise.reject(new Error('验证码是必填项！'));
            if(!reg.test(value)) return Promise.reject(new Error('验证码格式错误！'));
            return Promise.resolve();
        }
    }
    const [formIns] = Form.useForm(),
        [disabled, setDisabled] = useState(false),
        [sendText, setSendText] = useState('发送验证码')
    /* 表单提交 */
    const submit = values => {
        Toast.show({
            icon: 'success',
            content: '校验成功',
        });
    }
    const send = async () => {
        try {
            await formIns.validateFields(['phone'])
            Toast.show({
                icon: 'success',
                content: '手机号校验成功',
            });
        }catch (e){

        }
    }

    return (
        <div className="login-box">
            <NavBarAgain title="登录/注册" />
            <Form
                layout='horizontal'
                style={{ '---border-top': 'none' }}
                footer={
                    <ButtonAgain type='submit' color='primary'>
                        提交
                    </ButtonAgain>}
                onFinish={submit}
                form={formIns}
                initialValues={{ phone: '', code: '' }}
            >
                <Form.Item name='phone' label='手机号' rules={[{ validator: validate.phone }]}>
                    <Input placeholder='请输入手机号' />
                </Form.Item>

                <Form.Item name='code' label='验证码' rules={[{ validator: validate.code }]}
                    extra={
                        <ButtonAgain size='small' color='primary' onClick={send} disabled={disabled}>
                            {sendText}
                        </ButtonAgain>
                    }
                >
                    <Input />
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login
