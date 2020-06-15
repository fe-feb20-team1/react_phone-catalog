import { AnyAction } from 'redux';

const FINISH_LOADING = 'FINISH_LOADING';

const goodsReducer = (goods: Goods[] = [], action: AnyAction): Goods[] => {
  switch (action.type) {
    case FINISH_LOADING:
      return action.goods;

    default:
      return goods;
  }
};

export default goodsReducer;
