import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Settings = () => {
  return (
    <div>
      <Card style={{ borderRadius: 8 }}>
        <Title level={2}>Settings</Title>
        <Paragraph>Configure system preferences, notification rules, and application options here.</Paragraph>
      </Card>
    </div>
  );
};

export default Settings;
