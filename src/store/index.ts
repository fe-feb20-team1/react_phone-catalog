import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loadingReducer from './loading';
import goodsReducer from './goods';


// Selectors - a function receiving Redux state and returning some data from it
export const isLoading = (state: RootState) => state.loading;
export const getGoods = (state: RootState) => state.goods;
/*export const getQuery = (state: RootState) => state.query;*/

//Initial state

// rootReducer - this function is called after dispatching an action
const rootReducer = combineReducers({
  loading: loadingReducer,
  goods: goodsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`

const store = createStore(
  rootReducer,
  composeWithDevTools() // allows you to use http://extension.remotedev.io/
);

export default store;
