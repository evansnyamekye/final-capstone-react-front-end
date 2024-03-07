import React from 'react';
import '../Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="container">
    <div className="sidebar left-sidebar">
      <div className="header-tabs-container">
        <div className="header">
          <Link to="/"><img id="logo-img" src="/images/StaySphere.svg" alt="stay logo" /></Link>
        </div>
        <div className="tabs">
          <ul>
            <li>
              <Link to="placelist">
                <img src="/images/Places.svg" alt="places" />
                Places
              </Link>
            </li>
            <li>
              <Link to="addReservation">
                <img src="/images/Reserve.svg" alt="places" />
                Reserve
              </Link>
            </li>
            <li>
              <Link to="myreservations">
                <img src="/images/Myreservations.svg" alt="places" />
                My Reservations
              </Link>
            </li>
            <li>
              <Link to="addPlace">
                <img src="/images/add.svg" alt="places" />
                Add Place
              </Link>
            </li>
            <li>
              <Link to="DeletePlace">
                <img src="/images/delete.svg" alt="places" />
                Delete Place
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <ul>
          <li><a href="https://www.twitter.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter-icon" /></a></li>
          <li><a href="https://www.facebook.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/facebook.png" alt="facebook-icon" /></a></li>
          <li><a href="https://www.instagram.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/google.png" alt="twitter-icon" /></a></li>
          <li><a href="https://www.twitter.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram-icon" /></a></li>
          <li><a href="https://www.twitter.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/p.png" alt="p-icon" /></a></li>
        </ul>
        <p className="copyright">&copy; 2024 STAYSPARE HOTELS - CALIFORNIA</p>
      </div>
    </div>

    <div className="Center" />
  </nav>
);

export default Navigation;
