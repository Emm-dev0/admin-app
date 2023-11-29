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

  const handleForgotPassword = (e) => {
    navigate('/forgot-password');
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  return (
    <div className='container'>
      <div className='left'>
          {/* <div className='img'>
             <img src={pic}/>
          </div>
          <div className='text'>
              <p>
                Join our mission to empower less priviledge children through education. Sign up today to unlock a world of opportunities and support the journey towards a brighter future.
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

                <Title level={5}>Sign Up</Title>

                  <Form initialValues={{ email: "" }} onFinish={onFinish}>

                  <Form.Item
                      name="firstname"
                      rules={[
                        {
                          type: "text",
                          message: "The input is not valid firstname!",
                        },
                        {
                          required: true,
                          message: "Please input your firstname!",
                        },
                      ]}
                      hasFeedback
                    >
                      <label  style={{ fontSize: "12px" }}>First name</label>
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="lastname"
                      rules={[
                        {
                          type: "text",
                          message: "The input is not valid lastname!",
                        },
                        {
                          required: true,
                          message: "Please input your lastname",
                        },
                      ]}
                      hasFeedback
                    >
                      <label  style={{ fontSize: "12px" }}>Last name</label>
                      <Input />
                    </Form.Item>

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
                      <label  style={{ fontSize: "12px" }}>Password</label>
                      <Input.Password
                        type="password"
                        
                      />
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      dependencies={["password"]}
                      hasFeedback
                      placeholder=""
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
                      <label  style={{ fontSize: "12px" }}>Confirm Password</label>
                      <Input.Password />

                        {/* <a
                          style={{ float: "right",
                                  fontSize: "12px" }}
                          className="login-form-forgot"
                          onClick={handleForgotPassword}
                        >
                          Forgot password
                        </a> */}
                    </Form.Item>

                    <Form.Item>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox  style={{ fontSize: "12px" }}>I agree to the {" "}
                          <a className="login-form-forgot" style={{ color: "#0B5980"}}>
                                Terms and Conditions
                          </a>
                        </Checkbox>
                      </Form.Item>
                    </Form.Item>


                  <Form.Item>
                    <Button type="primary" htmlType="submit" block 
                    style={{ fontWeight: "500", backgroundColor: "#0B5980" }}>
                      Sign up
                    </Button>
                    <div style={{ display: "flex", justifyContent: "center", fontSize: "12px" }}>
                      <span>
                        Already have an account? {" "}
                        <a 
                        className="login-form-forgot"
                        style={{ color: "#0B5980" }}
                        onClick={handleLogin}>
                          Sign In
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
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch({ type: 'SET_USERNAME', payload: username }),
  }
}
export default connect(null, mapDispatchToProps)(Signup);