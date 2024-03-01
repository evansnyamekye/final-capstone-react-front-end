import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="container">
      <Navigation />
      {/* Start of Main Content */}
      <Outlet />
      {/* End of Main Content */}

    </div>
  );
}

export default Layout;
