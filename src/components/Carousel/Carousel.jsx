import React, { useState, useEffect } from 'react';

import './Carousel.css';

const Carousel = ({ children, slideIndex, changeSlideIndex }) => {
  const [length, setLength] = useState(children.length);
  const [startPosition, setStartPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const goToNextSlide = () => {
    if (slideIndex < (length - 1)) {
      changeSlideIndex((prevState) => prevState + 1);
    }
  };

  const goToPrevSlide = () => {
    if (slideIndex > 0) {
      changeSlideIndex((prevState) => prevState - 1);
    }
  };

  const handleStartMove = (e) => {
    if (e.touches === undefined) {
      setStartPosition(e.clientX);
    } else {
      setStartPosition(e.touches[0].clientX);
    }
  };

  const handleEndMove = (e) => {
    let currentPosition = null;

    if (startPosition === null) {
      return;
    }

    if (e.touches === undefined) {
      currentPosition = e.clientX;
    } else {
      currentPosition = e.touches[0].clientX;
    }

    const diff = startPosition - currentPosition;

    if (diff > 5) {
      goToNextSlide();
    }

    if (diff < -1) {
      goToPrevSlide();
    }

    setStartPosition(null);
  };

  return (
    <div className="carousel">
      <div
        className="carousel__window"
        onTouchStart={handleStartMove}
        onTouchMove={handleEndMove}
        onMouseDown={handleStartMove}
        onMouseUp={handleEndMove}
      >
        <div
          className="carousel__content-container"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
