import React from 'react';
import Slider from './Slider/Slider';
import HotPrices from './HotPrices/HotPrices';
import Categories from './Categories/Categories';
import NewModels from './NewModels/NewModels';

const HomePage: React.FC = () => {
  return (
    <>
      <Slider />
      <HotPrices />
      <Categories />
      <NewModels />
    </>
  );
};

export default HomePage;
