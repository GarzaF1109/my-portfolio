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
      <AboutMeComponent />
      {/* <TextComponent/> */}
    </div>
  );
};

export default Home;
