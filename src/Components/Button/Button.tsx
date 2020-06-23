import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFavourites } from '../../store/favourites';
import { getGoods, getFavourites } from '../../store/index';
import './Button.scss';

type Props = {
  id: string,
}

const Button: React.FC<Props> = ({ id }) => {
  const goods: Goods[] = useSelector(getGoods);
  const favourites: Goods[] = useSelector(getFavourites);
  const dispatch = useDispatch();



  const handleAddFavourites = (event: React.ChangeEvent<HTMLInputElement>) => {
    const card = goods.find(good => good.id === id);

    if (event.target.checked && card) {
      dispatch(addToFavourites([...favourites, card]))
    } else {
      dispatch(removeFavourites(id))
    }
  }

  const isInFavourites = useMemo(()=> (
    favourites.some(good => good.id === id)
    ), [id, favourites]);

  return (
    <>
      <button
        type="button"
        className="button"
      >
        Add to card
      </button>
      <label
        className="button__favourites"
        htmlFor={`button__favourites${id}`}
      >
        <input
          type="checkbox"
          id={`button__favourites${id}`}
          className="button__favourites-checkbox"
          checked={isInFavourites}
          onChange={(event) => handleAddFavourites(event)}
        />
        <span className="button__favourites-icon" />
      </label>
    </>
  );
};

export default Button;
