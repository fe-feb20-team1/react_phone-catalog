import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loadingReducer from './loading';
import goodsReducer from './goods';

export const isLoading = (state: RootState) => state.loading;
export const getGoods = (state: RootState) => state.goods;

const rootReducer = combineReducers({
  loading: loadingReducer,
  goods: goodsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
