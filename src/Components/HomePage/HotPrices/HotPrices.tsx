import React, { useState } from 'react';
import './HotPrices.scss';

import { cardWidth, visibleCards } from './constants';

const HotPrices: React.FC = () => {
  const [X, setX] = useState(0);
  const [count, setCount] = useState(1);
  const cards = [1, 2, 3, 4, 5, 6, 7];
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
              disabled={numberVisibleCards === cards.length}
            />
          </div>
        </div>

        <div
          className="hot-prices__cards"
          style={{ gridTemplateColumns: `repeat(${cards.length}, 272px)` }}
        >
          {cards.map(card => (
            <div
              className="hot-prices__card card"
              style={{ transform: `translateX(${X}px)` }}
            >
              {card}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HotPrices;
