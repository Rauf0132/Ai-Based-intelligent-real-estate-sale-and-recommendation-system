import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    { key: '/', icon: <HomeOutlined />, label: 'Home' },
    { key: '/properties', icon: <AppstoreOutlined />, label: 'Properties' },
    { key: '/login', icon: <UserOutlined />, label: 'Login' },
  ];

  return (
    <Header>
      <div className="logo" style={{ color: '#fff', float: 'left', fontWeight: 'bold', fontSize: 18 }}>
        🏡 RealEstate AI
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['/']}
        items={items}
        onClick={({ key }) => navigate(key)}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default Navbar;

