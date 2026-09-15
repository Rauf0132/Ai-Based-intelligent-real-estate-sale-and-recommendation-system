import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ padding: '24px' }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;

