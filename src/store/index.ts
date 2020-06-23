import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loadingReducer from './loading';
import goodsReducer from './goods';
import favouritesReducer from './favourites';

export const isLoading = (state: RootState) => state.loading;
export const getGoods = (state: RootState) => state.goods;
export const getFavourites = (state: RootState) => state.favourites;

const rootReducer = combineReducers({
  loading: loadingReducer,
  goods: goodsReducer,
  favourites: favouritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
