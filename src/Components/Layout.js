import React from 'react';
import Navigation from './Navigation';
import PlacesList from './PlaceList';

function Layout() {
  return (
    <div>
      {/* <h1>StaySpare</h1>
             <p>This is the main Content of the Hotel application</p> */}
      <Navigation />
      <PlacesList />
    </div>
  );
}

export default Layout;
