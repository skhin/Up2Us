import React, { useState } from "react";
import "./RegisterForm.css";
import { Form, Input, Button, Col, Row, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import authServ from "../../service/auth";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // HANDLING USER REGISTRATION
  const onFinish = async ({ userName, email, password }) => {
    setLoading(true);
    try {
      await authServ.signup({ userName, email, password });
      history.push("/login");
    } catch (err) {
      message.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Row className="registerForm">
        <Col xs={24} sm={24} md={15} lg={10} xl={9} className="registerBox">
          <Form
            name="register"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <h1>REGISTER</h1>
            <Form.Item
              name="userName"
              label="User Name"
              rules={[
                { required: true, message: "Please input your username" },
              ]}
            >
              <Input maxLength={20} />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { type: "email", message: "Please enter a valid Email" },
                { required: true, message: "Please enter your Email" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <br />
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                REGISTER
              </Button>
            </Form.Item>
            <p>
              Already have an Account? <Link to={"/login"}>Login Now</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterForm;
