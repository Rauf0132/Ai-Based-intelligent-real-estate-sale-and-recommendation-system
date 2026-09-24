import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Accounts = () => {
  return (
    <div>
      <Card style={{ borderRadius: 8 }}>
        <Title level={2}>Accounts</Title>
        <Paragraph>Manage your client accounts, active subscriptions, and user profiles here.</Paragraph>
      </Card>
    </div>
  );
};

export default Accounts;
