import React from 'react';

import Button from '../ui/Button/Button.jsx';

import calendar from '../../images/calendar.png';
import plate from '../../images/plate.png';
import plus from '../../images/plus.svg';
import bottle from '../../images/bottle.png';
import bubble1 from '../../images/bubble1.png';
import bubble2 from '../../images/bubble2.png';
import bubble3 from '../../images/bubble3.png';
import bubble4 from '../../images/bubble4.png';
import bubble5 from '../../images/bubble5.png';
import bubble6 from '../../images/bubble6.png';
import bubble7 from '../../images/bubble7.png';
import bubble8 from '../../images/bubble8.png';

import './Features.css';

const bubblesData = [
  { id: 1, file: bubble1 },
  { id: 2, file: bubble2 },
  { id: 3, file: bubble3 },
  { id: 4, file: bubble4 },
  { id: 5, file: bubble5 },
  { id: 6, file: bubble6 },
  { id: 7, file: bubble7 },
  { id: 8, file: bubble8 },
];

const Features = () => (
  <div className="features">
    <div className="features__container">
      <p className="features__subtitle">Ключевое сообщение</p>
      <h2 className="features__title">BREND<span>XY</span></h2>
      <div className="features__mosaics">
        <div className="mosaic mosaic_type_streched">
          <p className="mosaic__text">
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
            vestibulum lorem sed risus ultricies
            <img className="mosaic__image " src={plate} alt="Тарелка" />
          </p>
        </div>
        <div className="features__column">
          <div className="mosaic">
            <p className="mosaic__text">
              A arcu cursus vitae
              <img className="mosaic__image" src={calendar} alt="Календарь" />
            </p>
          </div>
          <Button icon={plus}>Подробнее</Button>
        </div>
      </div>
    {/* <div className="popup">
      Popup
    </div> */}
      <img className="features__bottle" src={bottle} alt="Флакон" />
      {bubblesData.map((bubble) => (
        <img
          className={`features__bubble${bubble.id}`}
          key={bubble.id}
          src={bubble.file}
          alt="Пузырь"
        />
      ))}
    </div>
  </div>
);

export default Features;
