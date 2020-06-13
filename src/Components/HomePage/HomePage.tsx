import React from 'react';
import Slider from './Slider/Slider';
import HotPrices from './HotPrices/HotPrices';

const HomePage: React.FC = () => {
  return (
    <>
      <Slider />
      <HotPrices />
    </>
  );
};

export default HomePage;
