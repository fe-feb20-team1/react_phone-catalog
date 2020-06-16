import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderNavigation from './Components/HeaderNavigation/HeaderNavigation';
import Main from './Components/HeaderNavigation/Main';
import Footer from './Components/Footer/Footer';

import { getGoodsFromServer } from './helpers/api';
import { finishLoading, startLoading } from './store/loading';

import './styles/App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());

    getGoodsFromServer()
      .then(
        goodsFromServer => dispatch(finishLoading(goodsFromServer)),
      );
  }, []);

  return (
    <div className="App">
      <HeaderNavigation />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
