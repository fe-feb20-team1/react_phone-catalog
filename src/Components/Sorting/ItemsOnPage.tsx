import React, { useState } from 'react';
import './Sorting.scss';
import { visibleItems } from './constants';

type Props = {
  perPage: (value: number) => void;
};

const ItemsOnPage: React.FC<Props> = ({ perPage }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(visibleItems[0].value);
  const toggle = () => setOpen(!open);
  console.log(selection);

  const handleSelect = (value: number) => {
    setSelection(value);
    setOpen(false);
    perPage(value);
  };

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
        <p className={open ? 'sorting__arrow sorting__arrow--up' : 'sorting__arrow'} />
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
  );
};

export default ItemsOnPage;
