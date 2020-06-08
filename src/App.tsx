import React from 'react';
import HeaderNavigation from './Components/HeaderNavigation/HeaderNavigation';
import Main from './Components/HeaderNavigation/Main';
import Footer from './Components/Footer/Footer';

import './styles/App.scss';

const App: React.FC = () => (
  <div className="App">
    <HeaderNavigation />
    <Main />
    <Footer />
  </div>
);

export default App;
