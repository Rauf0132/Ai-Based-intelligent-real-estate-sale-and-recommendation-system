# Sidebar Project

A light, reusable sidebar built with Ant Design (`Layout.Sider` + `Menu`), React Router, and a small
Express mock API that serves the sidebar labels.

## Structure

```
sidebar-project/
  client/               React app (Vite)
    src/
      components/
        Sidebar.jsx     <-- reusable sidebar component
      routes/
        Revenue.jsx
        Accounts.jsx
        Settings.jsx
      App.jsx           routes + layout
      main.jsx
  server/               Express mock API
    server.js
```

## What it does

- `Sidebar.jsx` fetches its menu items from `GET /api/sidebar-items` on mount — nothing is hardcoded
  in the component, so it's reusable across pages/apps.
- Three items come back from the mock API: **Revenue**, **Accounts**, and **Settings** (Settings has
  `position: "bottom"` and is pinned to the bottom of the sidebar).
- Clicking an item navigates to its `path` using React Router.
- The sidebar auto-collapses below the `lg` breakpoint (Ant Design's built-in responsive behavior) —
  no extra libraries or custom media-query code needed.
- Styling is plain white/light (`theme="light"`, white background, thin border) — no extra CSS files.

## Run it

**1. Start the mock API**
```bash
cd server
npm install
npm start
# -> Mock API running at http://localhost:4000
```

**2. Start the client**
```bash
cd client
npm install
npm run dev
# -> open the printed localhost URL (usually http://localhost:5173)
```

Both need to be running at the same time. The client is a normal Vite + React app — if you already
have a React project, you can just copy `src/components/Sidebar.jsx` into it (and `src/routes/*` if
you want the example pages).

## Changing/adding sidebar items

Edit `server/server.js` — `sidebarItems` is the mock data array. Each item looks like:

```js
{ key: 'revenue', label: 'Revenue', icon: 'DollarOutlined', path: '/revenue', position: 'top' }
```

- `icon` must be a valid `@ant-design/icons` export name (e.g. `DollarOutlined`, `UserOutlined`, `SettingOutlined`).
- `position: 'bottom'` pins the item to the bottom of the sidebar (used for Settings); omit it (or use `'top'`) for everything else.
- `path` is the React Router route it navigates to — add a matching `<Route>` in `App.jsx`.

In a real backend, swap the hardcoded array in `server.js` for a database call — the response shape
just needs to stay the same.
