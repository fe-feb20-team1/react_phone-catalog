import React, { useState } from 'react';
import './HotPrices.scss';
import Card from '../../Card/Card';

import { cardWidth, visibleCards } from './constants';

type Props = {
  goods: Goods[];
}

const HotPrices: React.FC<Props> = ({ goods }) => {
  const [X, setX] = useState(0);
  const [count, setCount] = useState(1);
  const [numberVisibleCards, setNumberVisibleCards] = useState(visibleCards);

  const handleButtonRight = () => {
    setNumberVisibleCards(numberVisibleCards + 1)
    setX(- cardWidth * count);
    setCount(count + 1);
  }

  const handleButtonLeft = () => {
    setNumberVisibleCards(numberVisibleCards - 1)
    setX(X + cardWidth);
    setCount(count - 1);
  }

  return (
    <section className="hot-prices">
      <div className="container">
        <div className="hot-prices__header">
          <h2>
            Hot prices
          </h2>
          <div className="hot-prices__buttons">
            <button
              type="button"
              className="hot-prices__arrow"
              onClick={handleButtonLeft}
              disabled={numberVisibleCards === visibleCards}
            />
            <button
              type="button"
              className="hot-prices__arrow hot-prices__arrow--right"
              onClick={handleButtonRight}
              disabled={numberVisibleCards === goods.length}
            />
          </div>
        </div>

        <div
          className="hot-prices__cards"
          style={{ gridTemplateColumns: `repeat(${goods.length}, 272px)` }}
        >
          {goods.map(good => (
            <Card good={good} width={X} key={good.id} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default HotPrices;
