import React from 'react';

import arrow from '../../../images/right-arrow.svg';

import './Button.css';

const Button = ({ children, handler, isAbsolute }) => (
  <button className={`button ${isAbsolute ? 'button_type_absolute' : ''}`} onClick={handler}>
    <div className="button__arrow-box">
      <img className="button__arrow" src={arrow} alt="Right arrow" />
    </div>
    <span className="button__text">
      {children}
    </span>
  </button>
);

export default Button;
