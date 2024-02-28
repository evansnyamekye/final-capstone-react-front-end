import React from 'react';

function Navigation() {
  return (
    <nav className="container">
      {/* Start of Left Sidebar */}
      <div className="sidebar left-sidebar">
        <div className="header">
          <a href="#home"><img src="../images/stay.jpg" alt="stay logo" /></a>
        </div>
        <div className="tabs">
          <ul>
            <li><a href="#model">Models</a></li>
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#drive">Test Drive</a></li>
          </ul>
        </div>
        {/* End of Left Sidebar */}

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

    </nav>
  );
}

export default Navigation;
