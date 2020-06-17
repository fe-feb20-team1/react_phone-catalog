import React from 'react';
import { NavLink/*, Link*/ } from 'react-router-dom';
import './Breadcrumbs.scss';

type Props = {
  phone: string;
}

const Breadcrumbs: React.FC<Props> = ({ phone }) => {
  return (
    <>
      <div className="breadcrumbs">
        <NavLink to="/" className="breadcrumbs__home-icon">
          <img src="./img/home.svg" alt="home icon" className="breadcrumbs__home" />
        </NavLink>
        <span className="breadcrumbs__arrow" />
        <NavLink to="/phones" className="breadcrumbs__page">
          {phone}
        </NavLink>
      </div>
    </>
  )
}

export default Breadcrumbs;
