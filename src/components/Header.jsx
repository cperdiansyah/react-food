import React from 'react';
import Brand from './Brand';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from 'elements/Button';
import './Header.scss';

export default function Header(props) {
  const navLinks = ['Home', 'Beverages', 'Chef', 'Ingredient', 'Stories'];
  const className = [props.className];
  return (
    <header className={'header-list ' + className.join(' ')}>
      <Brand />

      <div className="header-item flex items-center">
        <nav className="nav mr-10 nav-list">
          {navLinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link === 'Home' ? '/' : link.toLowerCase()}
                className="nav-item ml-5"
              >
                {link}
              </NavLink>
            );
          })}
        </nav>

        <Button className="nav-button" href="/" type="link">
          My Kitchen
        </Button>
      </div>
    </header>
  );
}
Header.propTypes = {
  className: PropTypes.string,
};
