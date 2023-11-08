import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title } = Typography;
 

const Login = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    console.log("Received values of form: ");
    // if (values.remember) {
    //   localStorage.setItem("username", values.username);
    //   localStorage.setItem("password", values.password);
    // }
    navigate('/admin');
  };

  const handleForgotPassword = (e) => {
    navigate('/forgot-password');
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleRegister = (e) => {
    navigate('/sign-up');
    e.preventDefault();
    console.log("Handle registration logic here");
  };


  return (
<div
style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}}
>
<Card style={{ width: 500 }}>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Title level={2}>Murics (emm_dev) </Title>
  </div>
  <Form
    name="normal_login"
    className="login-form"
    // initialValues={{ remember: true }}
    onFinish={onFinish}
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: "Please input your Username!" }]}
    >
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Username"
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: "Please input your Password!" }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
      <a
        style={{ float: "right" }}
        className="login-form-forgot"
        onClick={handleForgotPassword}
      >
        Forgot password
      </a>
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
    </Form.Item>
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        block
      >
        Log in
      </Button>
      Don't have an account? {" "}
      <a onClick={handleRegister} className="login-form-forgot">
        sign up
      </a>
    </Form.Item>
  </Form>
</Card>
</div>
  ); 
};

export default Login