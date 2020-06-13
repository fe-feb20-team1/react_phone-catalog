import React, { useState } from 'react';
import './HotPrices.scss';

const HotPrices: React.FC = () => {
  const [X, setX] = useState(0);
  const [count, setCount] = useState(1);
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  let cardWidth = 288;

  const handleButtonRight = () => {
    setX((0 - cardWidth) * count);
    setCount(count + 1);
    setCards([...cards.slice(1), cards[0]])
    console.log(cards);
  }

  const handleButtonLeft = () => {
    setCount(count - 1);
    setX(X + cardWidth);
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
            />
            <button
              type="button"
              className="hot-prices__arrow hot-prices__arrow--right"
              onClick={handleButtonRight}
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
