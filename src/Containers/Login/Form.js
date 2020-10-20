import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login } from '../../Api/Auth';

const LoginForm = ({ history }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 30 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 12 },
  };

  const onFinish = async (values) => {
    await Login(values);
    history.push('/');
  };

  const onFinishFailed = () => message.error('Login failed');

  return (
    <Form
      {...layout}
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
