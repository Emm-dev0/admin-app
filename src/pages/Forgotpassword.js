import React from 'react'
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import pic from '../images/Profile.jpg';
import '../styles/signup.css'

const { Title } = Typography;
 
const Forgotpassword = () => {

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

                <Title level={5}> < ArrowLeftOutlined style={{ marginRight: "20px" }}/>Forgot password</Title>
                <p style={{ fontSize: "16px", marginBottom: "10px", lineHeight: "18px"}}>Enter your email address to receive a password reset link</p>

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

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block 
                    style={{ fontWeight: "500", backgroundColor: "#0B5980", marginTop: "10px" }}>
                      Send link
                    </Button>
                    <div style={{ display: "flex", justifyContent: "center", fontSize: "12px", marginTop: "10px" }}>
                      <span>
                        Didn't receive link? {" "}
                        <a 
                        className="login-form-forgot"
                        style={{ color: "#0B5980" }}
                        onClick={handleRegister}
                        >
                          Resend
                        </a>
                      </span>
                    </div>
                  </Form.Item>

                </Form>
                     
          </Card>
          <div/>  
    </div>
    </div>

</div>
  )
}

export default Forgotpassword