import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Revenue = () => {
  return (
    <div>
      <Card style={{ borderRadius: 8 }}>
        <Title level={2}>Revenue</Title>
        <Paragraph>Welcome to the Revenue dashboard. Monitor sales, projections, and financial metrics here.</Paragraph>
      </Card>
    </div>
  );
};

export default Revenue;
