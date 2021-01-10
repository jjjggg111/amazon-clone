import React from 'react';
import './Home.css';
import banner from './banner.jpg';

function Banner() {
  return (
    <div className="home">
      <img className="home__img" src={banner} alt="" />
      <h1>test</h1>
    </div>
  );
}

export default Banner;
