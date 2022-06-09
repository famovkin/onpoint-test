import React, { useState } from 'react';

import Carousel from '../Carousel/Carousel.jsx';
import Home from '../Home/Home.jsx';
import Description from '../Description/Description.jsx';
import Features from '../Features/Features.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

import './App.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (<div>
    <Header slideIndex={currentIndex} changeSlideIndex={setCurrentIndex} />
    <Carousel slideIndex={currentIndex} changeSlideIndex={setCurrentIndex}>
      <Home changeSlideIndex={setCurrentIndex} />
      <Description slideIndex={currentIndex} />
      <Features />
    </Carousel>
    <Footer />
  </div>);
};

export default App;
