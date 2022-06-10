import React, { useState, useCallback } from 'react';

import Carousel from '../Carousel/Carousel.jsx';
import Home from '../Home/Home.jsx';
import Description from '../Description/Description.jsx';
import Features from '../Features/Features.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

import './App.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goHome = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
  };

  const goToSecondSlide = useCallback(() => setCurrentIndex(1), []);

  return (<div>
    <Header goHome={goHome}/>
    <Carousel slideIndex={currentIndex} changeSlideIndex={setCurrentIndex}>
      <Home goToSecondSlide={goToSecondSlide} />
      <Description slideIndex={currentIndex} />
      <Features />
    </Carousel>
    <Footer />
  </div>);
};

export default App;
