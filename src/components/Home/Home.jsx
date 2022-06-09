import React from 'react';

import Button from '../ui/Button/Button.jsx';

import sphere from '../../images/sphere.png';
import thornSphere from '../../images/sphere-with-thorns.png';
import sphereLarge from '../../images/sphere-large.png';
import sperm from '../../images/pink-sperm.png';
import arrow from '../../images/right-arrow.svg';

import './Home.css';

const Home = ({ changeSlideIndex }) => {
  const goToSecondSlide = () => changeSlideIndex(1);

  return (<section className="home">
    <p className="home__subtitle">Привет,</p>
    <div className="home__container">
      <h1 className="home__title">
        Это <span>не</span><br/>коммерческое<br/> задание
      </h1>
      <img className="home__sperm" src={sperm} alt="Pink sperm"/>
      <Button handler={goToSecondSlide} icon={arrow} isAbsolute>Что дальше?</Button>
    </div>
    <img className="home__sphere home__sphere_type_bottom" src={sphere} alt="Blue sphere" />
    <img className="home__sphere home__sphere_type_top" src={sphere} alt="Blue sphere" />
    <img className="home__thorn-sphere" src={thornSphere} alt="Sphere with throns" />
    <img className="home__large-sphere" src={sphereLarge} alt="Large sphere" />
  </section>);
};

export default Home;
