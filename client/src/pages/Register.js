import React from "react";
import {Link} from 'react-router-dom';
import {Form, Input} from 'antd';
const Register = () => {
    //from submit
    const submitHandler = (values) => {
        console.log(values);
    };
    return (
        <>
        <div className="register-page">
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Register</h1>
                <Form.Item label="Name" name="name">
                <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                <Input type="password" />
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/login">Already Register ? Click Here to Login</Link>
                    <button className="btn btn-primary">Register</button>
                </div>
            </Form>
        </div>

        </>
    );
};

export default Register;