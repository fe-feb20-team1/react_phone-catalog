import React from 'react';
import './Button.scss';

const Button = () => {
  return (
    <>
      <button
        type="button"
        className="button"
      >
        Add to card
      </button>
      <button
        type="button"
        className="button__favourites"
      />
    </>
  );
};

export default Button;
