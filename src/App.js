import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserAuth from './Components/UserAuth';
import UserSignUp from './Components/UserSignUp';
import Layout from './Components/Layout';
import PlaceList from './Components/PlaceList';
import MyReservations from './Components/MyReservations';
import './App.css';
import DetailsPage from './Components/DetailsPage';
import AddPlace from './Components/AddPlace';
import AddReservation from './Components/AddReservation';
import DeletePlace from './Components/DeletePlace';

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
          <Route
            path="/layout"
            element={<Layout />}
          >
            <Route path="placelist" element={<PlaceList />} />
            <Route path="detailsPage/:id" element={<DetailsPage />} />
            <Route path="myreservations" element={<MyReservations />} />
            <Route path="addPlace" element={<AddPlace />} />
            <Route path="addReservation" element={<AddReservation />} />
            <Route path="deletePlace" element={<DeletePlace />} />
          </Route>
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
