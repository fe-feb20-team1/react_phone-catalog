import React, { useMemo, useCallback } from 'react';
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



  const handleAddFavourites = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, goodId: string) => {
    const card = goods.find(good => good.id === goodId);

    if (event.target.checked) {
      dispatch(addToFavourites(card))
    } else {
      dispatch(removeFavourites(id))
    }
  }, [dispatch, goods],
  )

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
          onChange={(event) => handleAddFavourites(event, id)}
        />
        <span className="button__favourites-icon" />
      </label>
    </>
  );
};

export default Button;
