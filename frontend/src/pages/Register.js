import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Register values:', values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80 }}>
      <Card style={{ width: 400 }}>
        <Title level={2} style={{ textAlign: 'center' }}>Register</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, min: 6 }]}>
            <Input.Password placeholder="Create a password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;

