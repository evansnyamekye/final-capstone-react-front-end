import React from 'react';
import '../Navigation.css';
import { Link } from 'react-router-dom';
import '../Home.css';

function Navigation() {
  return (
    <nav className="container">
      {/* Start of Left Sidebar */}
      <div className="sidebar left-sidebar">
        <div className="header-tabs-container">
          <div className="header">
            <a href="#home"><img src="../images/stay.jpg" alt="stay logo" /></a>
          </div>
          <div className="tabs">
            <ul>
              <li><Link to="/PlaceList">Places</Link></li>
              <li><Link to="/reserve">Reserve</Link></li>
              <li><Link to="/my-reservations">My Reservations</Link></li>
              <li><Link to="/add-place">Add Place</Link></li>
              <li><Link to="/delete-place">Delete Place</Link></li>
            </ul>
          </div>
        </div>
        {/* End of Header and Tabs Containe */}

        {/* Start of Social-Icons */}
        <div className="social-icons">
          <ul>
            <li><a href="https://www.twitter.com/vespa"><img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter-icon" /></a></li>
            <li><a href="https://www.facebook.com/vespa"><img src="https://img.icons8.com/ios/50/000000/facebook.png" alt="facebook-icon" /></a></li>
            <li><a href="https://www.instagram.com/vespa"><img src="https://img.icons8.com/ios/50/000000/google.png" alt="twitter-icon" /></a></li>
            <li><a href="https://www.twitter.com/vespa"><img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram-icon" /></a></li>
            <li><a href="https://www.twitter.com/vespa"><img src="https://img.icons8.com/ios/50/000000/p.png" alt="p-icon" /></a></li>
          </ul>
          <p className="copyright">&copy; 2024 STAYSPARE HOTELS - CALIFORNIA</p>
        </div>
        {/* End of Social-Icons */}
      </div>

      {/* Start of Main  Content */}
      <div className="Center">
        <h1>StaySpare</h1>
        <h4>Please select a hotel</h4>
        {/*
        <div className="slideshow">
          <button onClick={this.goLeft}>Left</button>
          <img src={currentImage.src} alt={currentImage.name} />
          <button onClick={this.goRight}>Right</button>
        </div>

        <h2>{currentImage.name}</h2>
        <p>{currentImage.description}</p> */}

        {/* <div className="social-icons">
          <Facebook />
          <Twitter />
          <Instagram />
        </div> */}
      </div>
      {/* End of Main Content */}
    </nav>
  );
}

export default Navigation;
