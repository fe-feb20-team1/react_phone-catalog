import { AnyAction } from 'redux';

const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';

export const addToFavourites = (favourites: Goods[] = []) => ({ type: ADD_TO_FAVOURITES, favourites });
export const removeFavourites = (id: string) => ({ type: REMOVE_FAVOURITES, id });

const favouritesReducer = (favourites: Goods[] = [], action: AnyAction): Goods[] => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return action.favourites;

    case REMOVE_FAVOURITES:
      return favourites.filter(good => good.id !== action.id);

    default:
      return favourites;
  }
};

export default favouritesReducer;
