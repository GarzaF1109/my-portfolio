"use client";

import React from 'react';
import MeComponent from '../components/MeComponent';
import AboutMeComponent from '../components/AboutMeComponent';

const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MeComponent />
      </div>
      <div id="about-me-section">
        <AboutMeComponent />
      </div>
      {/* <TextComponent/> */}
    </div>
  );
};

export default Home;
