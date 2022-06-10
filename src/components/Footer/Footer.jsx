import React, { memo } from 'react';

import logo from '../../images/logo.svg';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <a href="https://onpoint.ru" target="_blank" rel="noreferrer">
      <img className="footer__logo" src={logo} alt="Onpoint" />
    </a>
  </div>
);

export default memo(Footer);
