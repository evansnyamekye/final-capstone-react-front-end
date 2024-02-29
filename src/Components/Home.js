import React from 'react';
import './App.css'; 

import images from './images/hotel1.jpg';
import images from './images/hotel2.jpg';
import images from './images/hotel3.jpg';
import images from './images/hotel4.jpg';
import images from './images/hotel5.jpg';


import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

class App extends React.Component {
  state = {
    images: [
      { src: images, name: 'first_hotel', description: 'stayspare hotel brings liesure to meaning' },
      { src: images, name: 'second_hotel', description: 'stayspare hotel brings liesure to meaning' },
      { src: images, name: 'third_hotel', description: 'stayspare hotel brings liesure to meaning' },
    ],
    currentIndex: 0,
  };

  goLeft = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + prevState.images.length - 1) % prevState.images.length,
    }));
  };

  goRight = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    }));
  };

  render() {
    const { images, currentIndex } = this.state;
    const currentImage = images[currentIndex];
  }
}

export default Home;
