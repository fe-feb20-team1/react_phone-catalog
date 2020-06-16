import React from 'react';
import './Sorting.scss';

const Sorting = () => {
  return (
    <>
      <label>
        Sort by
        <select>
          <option>Price: Low to Hight</option>
          <option>Goods: A to Z</option>
          <option>Goods: Z to A</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </label>
    </>
  )
}

export default Sorting;
