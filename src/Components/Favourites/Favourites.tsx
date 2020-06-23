import React from 'react';
import './Favourites.scss';
import { useSelector } from 'react-redux';
import Breadcrumbs from  '../Breadcrumbs/Breadcrumbs';
import Card from '../Card/Card';
import { getFavourites } from '../../store/index';

const Favourites = () => {
  const favourites: Goods[] = useSelector(getFavourites);
  return (
    <>
      <Breadcrumbs phone={"Favourites"} />
      <h2 className="favourites__title">
        Favourites
      </h2>
      <p className="favourites__subtitle">
        {favourites.length} models
      </p>
      <div className="favourites__cards">
        {favourites.map(good => (
          <Card good={good} width={0} key={good.id} />
        ))}
      </div>
    </>
  )
}

export default Favourites;
