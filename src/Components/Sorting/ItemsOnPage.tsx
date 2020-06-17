import React, { useState } from 'react';
import './Sorting.scss';
import { visibleItems } from './constants';

const ItemsOnPage = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(visibleItems[0].value);
  const toggle = () => setOpen(!open);

  const handleSelect = (value: number) => {
    setSelection(value)
    setOpen(false);
  }

  return (
    <div className="sorting">
      <p className="sorting__title">
        Items on page
        </p>
      <div
        className="sorting__select sorting__select-page"
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
        <ul className="sorting__list sorting__list-page">
          {visibleItems.map(item => (
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
  )
}

export default ItemsOnPage;
