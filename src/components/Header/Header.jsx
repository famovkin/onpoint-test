import React from 'react';

import homeIcon from '../../images/home.svg';

import './Header.css';

const Header = ({ goHome }) => (
  <div className="header">
    <img className="header__home-icon" src={homeIcon} alt="Home" onClick={goHome} />
    <p className="header__project">Project</p>
  </div>
);

export default Header;
