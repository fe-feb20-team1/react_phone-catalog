import React, { useState} from 'react';
import './Sorting.scss';
import { sortBy } from './constants';
import ItemsOnPage from './ItemsOnPage';

const Sorting = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(sortBy[0].value);
  const toggle = () => setOpen(!open);

  const handleSelect = (value: string) => {
    setSelection(value)
    setOpen(false);
  }

  return (
    <div className="sorting__wrapper">
      <div className="sorting">
        <p className="sorting__title">
          Sort by
        </p>
        <div
          className="sorting__select"
          role="button"
          onClick={() => toggle()}
        >
          <p className="sorting__option">
            {selection}
          </p>
          <p className={open ? "sorting__arrow sorting__arrow--up" : "sorting__arrow"}>
          </p>
        </div>
        {open && (
          <ul className="sorting__list">
            {sortBy.map(item => (
              <li className="sorting__item" key={item.id}>
                <button
                  type="button"
                  className="sorting__option"
                  onClick={() => handleSelect(item.value)}
                >
                  <span className="sorting__text">
                    {item.value}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ItemsOnPage />
    </div>
  )
}

export default Sorting;
