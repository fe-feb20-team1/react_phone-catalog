import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <NavLink to="/home" className="footer__logo" >
          <img src="./img/logo.svg" alt="logo" className="logo" />
        </NavLink>

        <div className="footer__links">
          <NavLink to="/github" className="footer__github footer__link">
            github
          </NavLink>
          <NavLink to="/contacts" className="footer__contacts footer__link">
            contacts
          </NavLink>
          <NavLink to="/rights" className="footer__rights footer__link">
            rights
          </NavLink>
        </div>

        <div className="footer__back-to-top">
          <div className="footer__text">
            Back to top
          </div>
          <Link to="/top" className="footer__button" >
            <img src="./img/back-to-top.svg" alt="back-to-top" className="footer__button" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
