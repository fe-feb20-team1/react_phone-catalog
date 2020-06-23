import { AnyAction } from 'redux';

const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';

export const addToFavourites = (good: Goods | undefined) => ({ type: ADD_TO_FAVOURITES, good });
export const removeFavourites = (id: string) => ({ type: REMOVE_FAVOURITES, id });

let initFavorites: Goods[] = [];

if (localStorage.getItem('favoriteProducts')) {
  initFavorites = [...JSON.parse(localStorage.getItem('favoriteProducts') || '')];
}

const favouritesReducer = (favourites = initFavorites, action: AnyAction): Goods[] => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...favourites, action.good];

    case REMOVE_FAVOURITES:
      return favourites.filter(good => good.id !== action.id);

    default:
      return favourites;
  }
};

export default favouritesReducer;
