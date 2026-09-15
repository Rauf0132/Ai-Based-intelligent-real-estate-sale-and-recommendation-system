import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Login values:', values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80 }}>
      <Card style={{ width: 400 }}>
        <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;

