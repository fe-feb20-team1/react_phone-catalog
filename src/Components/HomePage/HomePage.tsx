import React from 'react';
import Slider from './Slider/Slider';
import HotPrices from './HotPrices/HotPrices';
import Categories from './Categories/Categories';

const HomePage: React.FC = () => {
  return (
    <>
      <Slider />
      <HotPrices />
      <Categories />
    </>
  );
};

export default HomePage;
