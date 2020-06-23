import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '')
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
