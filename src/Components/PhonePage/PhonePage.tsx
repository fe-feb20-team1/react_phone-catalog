import React, { useState } from 'react';
import './PhonePage.scss';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Card from '../Card/Card';
import Sorting from '../Sorting/Sorting';
import { getGoods } from '../../store/index';
import Pagination from '../Pagination/Pagination';

const PhonePage = () => {
  const goods = useSelector(getGoods);
  const [goodsNumber, setGoodsNumber] = useState(20);
  console.log(goods);

  const visibleGoods = [...goods].slice(0, goodsNumber);

  const handlePhonesNumber = (value: number) => {
    setGoodsNumber(value);
  };

  return (
    <>
      <Breadcrumbs phone="Phones" />
      <h2 className="phone-page__title">
        Mobile Phones
      </h2>
      <p className="phone-page__subtitle">
        16 models
      </p>
      <Sorting
        phonesPerPage={handlePhonesNumber}
      />
      <div className="phone-page__cards">
        {visibleGoods.map(good => (
          <Card good={good} width={0} key={good.id} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default PhonePage;
