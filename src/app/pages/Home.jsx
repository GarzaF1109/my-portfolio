"use client";

import React from 'react';
import Hero from '../components/HeroComponent';
import { VelocityText as TextComponent } from '../components/TextComponent';
import {SmoothScrollHero as AboutMeComponent} from '../components/AboutMeComponent';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMeComponent />
      <TextComponent/>
    </div>
  );
};

export default Home;
