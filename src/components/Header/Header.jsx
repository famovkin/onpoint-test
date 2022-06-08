import React from 'react';

import homeIcon from '../../images/home.svg';

import './Header.css';

const Header = ({ slideIndex, changeSlideIndex }) => {
  const goHome = () => {
    if (slideIndex !== 0) {
      changeSlideIndex(0);
    }
  };

  return (<div className="header">
    <img className="header__home-icon" src={homeIcon} alt="Home" onClick={goHome}/>
    <p className="header__project">Project</p>
  </div>);
};

export default Header;
