import React from 'react'
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from "antd";
import { MailOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import pic from '../images/Profile.jpg';
import '../styles/signup.css'

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
    <div className='container'>
        <div className='left'>
            {/* <div className='img'>
              <img src={pic}/>
            </div>
            <div className='text'>
                <p>
                  Welcome back! Log in to your account and continue making a positive impact by contributing to the education and empowerment of less privileged children.
                </p>
            </div>   */}
          
        </div>

        <div className='right'>    
        <div className='logos'>
          <img className='logo' src='pic' style={{ width: 350 }} />   
        </div> 
            <div className='formBox'>
              <Card 
                style={{ width: 300 }} 
                bordered={false}>

                    <Title level={5}>Sign in</Title>

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
                          <label  style={{ fontSize: "12px" }}>Email Address</label>
                          <Input />
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
                          <label  style={{ fontSize: "12px" }}>Enter Password</label>
                          <Input.Password
                            type="password"
                          />
                        </Form.Item>

                    
                        <Form.Item>
                          <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox  style={{ fontSize: "12px" }}>Remember me</Checkbox>
                            <a
                              style={{ float: "right",
                                      fontSize: "12px",
                                      color: "#0B5980"}}
                                      
                              className="login-form-forgot"
                              onClick={handleForgotPassword}
                            >
                              Forgot password
                            </a>
                          </Form.Item>
                        </Form.Item>


                      <Form.Item>
                        <Button type="primary" htmlType="submit" block 
                        style={{ fontWeight: "500", backgroundColor: "#0B5980" }}>
                          Sign in
                        </Button>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "12px" }}>
                          <span>
                            Don't have an account? {" "}
                            <a 
                            className="login-form-forgot"
                            style={{ color: "#0B5980" }}
                            onClick={handleRegister}
                            >
                              Sign up
                            </a>
                          </span>
                        </div>
                      

                        <div className='flexLine'>
                        <hr  style={{ width: 130 }} /> <span className='or'> Or </span> <hr style={{ width: 130 }} />
                        </div>
                      </Form.Item>

                      </Form>
                      
                      <Button
                      htmlType="submit" 
                      style={{ color: "#0B5980", border: "1px solid #0B5980" }}
                      block>
                        <GoogleOutlined size={40}/>
                          Continue With Google
                        </Button>

              </Card>
              <div/>  
        </div>
        </div>

    </div>
  ); 
};

export default Login