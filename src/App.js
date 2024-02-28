import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserAuth from './Components/UserAuth';
import UserSignUp from './Components/UserSignUp';
import Layout from './Components/Layout';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserAuth setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<UserSignUp />} />
        {loggedIn ? (
          <Route path="/layout" element={<Layout />} />
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
