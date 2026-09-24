import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Row, Col, Grid } from 'antd';
import { HomeOutlined, AppstoreOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header } = Layout;
const { useBreakpoint } = Grid;

// Reusable navigation configuration
export const NAV_ITEMS = [
  { key: '/', icon: <HomeOutlined />, label: 'Home' },
  { key: '/properties', icon: <AppstoreOutlined />, label: 'Properties' },
  { key: '/login', icon: <UserOutlined />, label: 'Login' },
];

// Reusable Menu Component
export const NavMenu = ({ mode, theme, selectedKeys, onClick, style }) => (
  <Menu
    theme={theme}
    mode={mode}
    selectedKeys={selectedKeys}
    items={NAV_ITEMS}
    onClick={onClick}
    style={style}
  />
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();

  // Close drawer when resized to desktop breakpoint
  useEffect(() => {
    if (screens.md) {
      setOpen(false);
    }
  }, [screens.md]);

  const handleNavigate = ({ key }) => {
    navigate(key);
    setOpen(false);
  };

  return (
    <Header style={{ padding: '0 24px' }}>
      <Row justify="space-between" align="middle" wrap={false} style={{ height: '100%' }}>
        <Col flex="none">
          <div
            className="logo"
            style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
              setOpen(false);
            }}
          >
            🏡 RealEstate AI
          </div>
        </Col>

        {/* Desktop Menu using Ant Design Grid (hidden on xs/sm, visible on md and up) */}
        <Col xs={0} md={18} flex="auto" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavMenu
            mode="horizontal"
            theme="dark"
            selectedKeys={[location.pathname]}
            onClick={handleNavigate}
            style={{ background: 'transparent', borderBottom: 'none', minWidth: 0 }}
          />
        </Col>

        {/* Mobile Menu Button using Ant Design Grid (visible on xs/sm, hidden on md and up) */}
        <Col xs={6} md={0} style={{ textAlign: 'right' }}>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: '#fff', fontSize: 20 }} />}
            onClick={() => setOpen(true)}
          />
        </Col>
      </Row>

      {/* Collapsed Mobile Navigation Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <NavMenu
          mode="inline"
          theme="light"
          selectedKeys={[location.pathname]}
          onClick={handleNavigate}
          style={{ borderRight: 'none' }}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;

