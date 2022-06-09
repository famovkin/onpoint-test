import React from 'react';

import './Subtitle.css';

const Subtitle = ({ children, mod }) => (
  <p className={`subtitle ${mod}`}>{children}</p>
);

export default Subtitle;
