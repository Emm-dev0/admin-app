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

const Resetpassword = ({ setUsername }) => {

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

                <Title level={5}>Reset password</Title>
            
                  <Form initialValues={{ email: "" }} onFinish={onFinish}>

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
                      <label  style={{ fontSize: "12px" }}>Enter new Password</label>
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
                      <label  style={{ fontSize: "12px" }}>Confirm new Password</label>
                      <Input.Password />

    
                    </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block 
                    style={{ fontWeight: "500", backgroundColor: "#0B5980", marginTop: "10px" }}>
                      Save password
                    </Button>
                  </Form.Item>

                </Form>
                     
          </Card>
          <div/>  
    </div>
    </div>

</div>
  )
}

export default Resetpassword