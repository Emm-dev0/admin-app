import React from 'react'
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const Signup = ({ setUsername }) => {
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log("Success:", values);
    const newUsername = values.username;
    setUsername(newUsername);
    navigate('/admin');
  };

  
  const handleLogin = (e) => {
    navigate('/');
    e.preventDefault();
    console.log("Handle registration logic here");
  };

  return (
    <Row>
      <Col span={12} offset={6} style={{ paddingTop: "10%" }}>
        <Title>Sign Up</Title>

        <Form initialValues={{ email: "" }} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            hasFeedback
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[
              {
                type: "text",
                message: "The input is not valid username!",
              },
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
            hasFeedback
          >
            <Input prefix={<MailOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
                min: 6,
                max: 24,
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            placeholder="Confirm Password"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          {/* <Form.Item>
            <a href="">Forgot password</a>
          </Form.Item> */}
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              sign up
            </Button>
            <br /> Or <a onClick={handleLogin} className="login-form-forgot">Log in!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch({ type: 'SET_USERNAME', payload: username }),
  }
}
export default connect(null, mapDispatchToProps)(Signup);