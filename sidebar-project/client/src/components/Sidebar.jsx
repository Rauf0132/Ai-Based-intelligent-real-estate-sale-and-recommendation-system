import React, { useEffect, useState } from 'react';
import { Layout, Menu, Spin } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Icons from '@ant-design/icons';

const { Sider } = Layout;

// Dynamically render Ant Design icons by string name
const renderIcon = (iconName) => {
  if (!iconName) return null;
  const IconComponent = Icons[iconName];
  return IconComponent ? React.createElement(IconComponent) : null;
};

const Sidebar = ({ endpoint = '/api/sidebar-items' }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchSidebarItems = async () => {
      try {
        // Try relative endpoint (via proxy) or fallback to direct port 4000
        let response;
        try {
          response = await fetch(endpoint);
          if (!response.ok) throw new Error('Proxy failed');
        } catch {
          response = await fetch('http://localhost:4000/api/sidebar-items');
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch sidebar items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarItems();
  }, [endpoint]);

  // Map API items to Ant Design Menu items
  const formatMenuItems = (list) =>
    list.map((item) => ({
      key: item.key,
      label: item.label,
      icon: renderIcon(item.icon),
      path: item.path,
    }));

  const topItems = formatMenuItems(items.filter((item) => item.position !== 'bottom'));
  const bottomItems = formatMenuItems(items.filter((item) => item.position === 'bottom'));

  // Determine active key based on current location pathname
  const activeItem = items.find((item) => item.path === location.pathname);
  const selectedKeys = activeItem ? [activeItem.key] : [];

  const handleMenuClick = ({ key }) => {
    const targetItem = items.find((item) => item.key === key);
    if (targetItem && targetItem.path) {
      navigate(targetItem.path);
    }
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="80"
      theme="light"
      style={{
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        background: '#fff',
        borderRight: '1px solid #f0f0f0',
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        {/* Top navigation items */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
              <Spin size="small" />
            </div>
          ) : (
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={selectedKeys}
              items={topItems}
              onClick={handleMenuClick}
              style={{ borderRight: 'none' }}
            />
          )}
        </div>

        {/* Bottom pinned items (e.g. Settings) */}
        {bottomItems.length > 0 && (
          <div style={{ borderTop: '1px solid #f0f0f0' }}>
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={selectedKeys}
              items={bottomItems}
              onClick={handleMenuClick}
              style={{ borderRight: 'none' }}
            />
          </div>
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;
