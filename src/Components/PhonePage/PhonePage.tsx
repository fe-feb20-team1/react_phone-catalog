import React from 'react';
import './PhonePage.scss';
import { useSelector } from 'react-redux';
import Breadcrumbs from  '../Breadcrumbs/Breadcrumbs';
import Card from '../Card/Card';
import Sorting from '../Sorting/Sorting';
import { getGoods } from '../../store/index';

const PhonePage = () => {
  const goods = useSelector(getGoods);
  return (
    <>
      <Breadcrumbs phone={"Phones"} />
      <h2 className="phone-page__title">
        Mobile Phones
      </h2>
      <p className="phone-page__subtitle">
        16 models
      </p>
      <Sorting />
      <div className="phone-page__cards">
        {goods.map(good => (
          <Card good={good} width={0} key={good.id} />
        ))}
      </div>
    </>
  )
}

export default PhonePage;
