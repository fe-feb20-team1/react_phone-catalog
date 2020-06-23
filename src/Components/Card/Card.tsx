/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Card.scss';
import Button from '../Button/Button';

type Props = {
  good: Goods;
  width: number;
};

const Card: React.FC<Props> = ({ good, width = 0 }) => {
  return (
    <div
      className="card"
      style={{ transform: `translateX(${width}px)` }}
    >
      <img src={good.imageUrl} className="card__image" alt={good.name} />
      <h5 className="card__title">
        {good.name}
      </h5>
      <span className="card__new-price">
        ${(good.discount > 0)
          ? good.price - ((good.price / 100) * good.discount)
          : good.price}
      </span>
      {(good.discount > 0) && (
        <span className="card__old-price">
          ${good.price}
        </span>
      )}
      <div className="card__info">
        <div className="card__info-title">
          Screen
        </div>
        <div className="card__info-text">
          {good.screen}
        </div>
        <div className="card__info-title">
          Capacity
        </div>
        <div className="card__info-text">
          {good.capacity}
        </div>
        <div className="card__info-title">
          Ram
        </div>
        <div className="card__info-text">
          {good.ram}
        </div>
      </div>
      <Button id={good.id} />
    </div>
  );
};

export default Card;
