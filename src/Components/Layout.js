import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import '../Navigation.css';

function Layout() {
  return (
    <div className="container">
      <Navigation />
      {/* Start of Main Content */}
      <div className="Center">
        <h1>StaySpare</h1>
        <Outlet />
        <h4>Please select a hotel</h4>
      </div>
      {/* End of Main Content */}

    </div>
  );
}

export default Layout;
