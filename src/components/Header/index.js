// == Import npm
import React from 'react';
import { NavLink } from "react-router-dom";

// == Import
import './style.scss';

// == Composant
const Header = () => {
  const showMenu = () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');
    if (toggle && nav) {
      nav.classList.toggle("show-menu");
    }
  }

  const navLink = document.querySelectorAll('.nav__link');
  const linkAction =() => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove("show-menu");
  }

  function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) {
      header.classList.add('scoll-header'); 
    } else {
      header.classList.remove('scoll-header')
    }
  }
  window.addEventListener('scoll', scrollHeader);

  return (
  <header className="header" id="header">
    <nav className="nav bd-container">
      <a href="#" className="nav__logo">Portfolio</a>
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

      <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
        <i className='bx bx-menu'></i>
      </div>
    </nav>
  </header>
)};

// == Export
export default Header;
