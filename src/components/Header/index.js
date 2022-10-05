// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Header = () => {
  const showMenu = () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');
    const buttonShow = document.querySelector('.bx-menu');
    const buttonClose = document.querySelector('.bx-x');
    buttonShow.style.display = 'none';
    buttonClose.style.display = 'block';
    if (toggle && nav) {
      nav.classList.toggle('show-menu');
    }
  };

  const hideMenu = () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');
    const buttonShow = document.querySelector('.bx-menu');
    const buttonClose = document.querySelector('.bx-x');
    buttonShow.style.display = 'block';
    buttonClose.style.display = 'none';
    if (toggle && nav) {
      nav.classList.toggle('show-menu');
    }
  };
  const navLink = document.querySelectorAll('.nav__link');
  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    const buttonShow = document.querySelector('.bx-menu');
    const buttonClose = document.querySelector('.bx-x');
    buttonShow.style.display = 'block';
    buttonClose.style.display = 'none';
  };

  // function scrollHeader() {
  //   const header = document.getElementById('header');
  //   if (this.scrollY >= 200) {
  //     header.classList.add('scroll-header');
  //   } else {
  //     header.classList.remove('scroll-header');
  //   }
  // }
  // window.addEventListener('scroll', scrollHeader);

  return (
    <header className="header" id="header">
      <nav className="nav bd-container">
        <h1 className="nav__logo">
          <NavLink className="nav__logo nav__link underline" onClick={linkAction} to="/" exact>
            Portfolio
          </NavLink>
        </h1>
        <div className="header__border"></div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className="nav__link underline"
                activeClassName="active"
                onClick={linkAction}
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link underline"
                activeClassName="active"
                onClick={linkAction}
                to="/about"
                exact
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link underline"
                activeClassName="active"
                onClick={linkAction}
                to="/contact"
                exact
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" onClick={showMenu}></i>
          <i className="bx bx-x" onClick={hideMenu}></i>
        </div>
      </nav>
    </header>
  );
};

// == Export
export default Header;
