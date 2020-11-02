import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { ACCESS_KEY_CONSTANT } from '../../Utility/constant';
import { auth } from './firebase';

const LoginForm = ({ history }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 30 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 12 },
  };

  const onFinish = async ({email, password}) => {
    try {
      const authHandler = await auth.signInWithEmailAndPassword(email, password);
      const token = await authHandler.user.getIdToken()
      localStorage.setItem(ACCESS_KEY_CONSTANT, token);
      window.location.reload(false);
    }catch(error) {
      console.error('Error Signing In: ', error);
    }
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
