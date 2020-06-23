import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavourites } from '../../store/index';
import './HeaderNavigation.scss';


import Nav from './Nav/Nav';

const HeaderNavigation: React.FC = () => {
  const favourites: Goods[] = useSelector(getFavourites);
  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo">
          <img src="./img/logo.svg" alt="logo" className="logo" />
        </NavLink>
        <Nav />
        <div className="header__icons">
          <NavLink to="/favourites" className="header__favourites header__icon" activeClassName="header__link--active" >
            {favourites.length > 0 ? (
              <span className="header__favourites--counter">
                {favourites.length > 0 ? favourites.length : ''}
              </span>
            ) : ''}
          </NavLink>
          <NavLink to="/cart" className="header__cart header__icon" activeClassName="header__link--active" />
        </div>
      </header>
    </>
  );
};

export default HeaderNavigation;
