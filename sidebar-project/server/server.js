const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const sidebarItems = [
  { key: 'revenue', label: 'Revenue', icon: 'DollarOutlined', path: '/revenue', position: 'top' },
  { key: 'accounts', label: 'Accounts', icon: 'UserOutlined', path: '/accounts', position: 'top' },
  { key: 'settings', label: 'Settings', icon: 'SettingOutlined', path: '/settings', position: 'bottom' }
];

app.get('/api/sidebar-items', (req, res) => {
  res.json(sidebarItems);
});

app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});
