import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      Real Estate AI ©{new Date().getFullYear()} — AI-Based Intelligent Real Estate System
    </AntFooter>
  );
};

export default Footer;
