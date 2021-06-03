import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        exact
        activeClassName="nav__item-active"
        className="nav__item"
      >
        HOME
      </NavLink>
      <NavLink
        to="/portfolio"
        exact
        activeClassName="nav__item-active"
        className="nav__item"
      >
        PORTFOLIO
      </NavLink>
      <NavLink
        to="/aboutme"
        exact
        activeClassName="nav__item-active"
        className="nav__item"
      >
        ABOUT
      </NavLink>
    </nav>
  );
}

NavBar.propTypes = {

};
