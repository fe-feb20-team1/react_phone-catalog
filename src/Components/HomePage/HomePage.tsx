import React from 'react';
import Slider from './Slider/Slider';
import HotPrices from './HotPrices/HotPrices';
import Categories from './Categories/Categories';
import NewModels from './NewModels/NewModels';
import { FilterHotPrice, FilterNewestModels } from '../../helpers/FilterGoods';
import { getGoods } from '../../store/index';
import { useSelector } from 'react-redux';

const HomePage: React.FC = () => {
  const goods: Goods[] = useSelector(getGoods);
  const hotPrices = FilterHotPrice(goods);
  const newModels = FilterNewestModels(goods);

  return (
    <>
      <Slider />
      <HotPrices goods={hotPrices} />
      <Categories />
      <NewModels goods={newModels} />
    </>
  );
};

export default HomePage;
