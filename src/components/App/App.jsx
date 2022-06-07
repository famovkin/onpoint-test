import React from 'react';

import Carousel from '../Carousel/Carousel.jsx';

import './App.css';

const App = () => (
  <div>
    <Carousel>
      <div style={{ background: 'red' }}>Page 1</div>
      <div style={{ background: 'blue' }}>Page 2</div>
      <div style={{ background: 'green' }}>Page 3</div>
    </Carousel>
  </div>
);

export default App;
