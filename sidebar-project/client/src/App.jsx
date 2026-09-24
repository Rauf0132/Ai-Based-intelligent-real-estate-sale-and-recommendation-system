import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Revenue from './routes/Revenue';
import Accounts from './routes/Accounts';
import Settings from './routes/Settings';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Sidebar />
      <Layout style={{ background: '#fafafa' }}>
        <Content style={{ margin: '24px', minHeight: 280 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/revenue" replace />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
