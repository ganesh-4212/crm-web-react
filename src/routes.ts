import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Customers = React.lazy(() => import('./views/Customers'));
const CustomerView = React.lazy(() => import('./views/Customer'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', name: 'Customers', component: Customers,exact: true },
  { path: '/customers/new', name: 'New', component: CustomerView },
];

export default routes;
