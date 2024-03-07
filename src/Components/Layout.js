import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <div className="container">
    <Navigation />
    <Outlet />
  </div>
);

export default Layout;
