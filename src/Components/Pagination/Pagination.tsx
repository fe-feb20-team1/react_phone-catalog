import React from 'react';
import './Pagination.scss';

const HotPrices: React.FC = () => {
  const numbers = [1, 2, 3, 4];

  return (
    <section className="pagination">

      <ul className="pagination__list">
        <li className="pagination__item">
          <button
            type="button"
            className="pagination__arrow"
          >
            {' '}
          </button>
        </li>
        {numbers.map(item => (
          <li className="pagination__item">
            <button
              type="button"
              className={item === 1
                ? 'pagination__button pagination__button--active'
                : 'pagination__button'}
            >
              {item}
            </button>
          </li>
        ))}
        <li className="pagination__item">
          <button
            type="button"
            className="pagination__arrow pagination__arrow--right"
          >
            {' '}
          </button>
        </li>
      </ul>
    </section>
  );
};

export default HotPrices;
