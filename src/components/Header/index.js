// == Import npm
import React, {useContext, useEffect} from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import {auth} from "../../firebase-config";
import { UserContext } from '../../context/userContext';

// == Import
import './style.scss';

// == Composant
export default function Header() {
  
  const {currentUser} = useContext(UserContext)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("Pour diverses raisons, nous ne pouvons pas vous déconnecter, veuillez vérifier votre connexion et réésayer")
    }
  }

  // RESPONSIVE MENU
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
          <NavLink className="nav__logo nav__link underline" onClick={linkAction} to="/">
            Comics Quiz
          </NavLink>
        </h1>
        <div className="nav__menu" id="nav-menu">
          { !currentUser ? (
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className="nav__link underline accueil"
                onClick={linkAction}
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link underline"
                onClick={linkAction}
                to="/inscription"
              >
                Inscription
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link underline"
                onClick={linkAction}
                to="/connexion"
              >
                Connexion
              </NavLink>
            </li>
          </ul>
            ) : 
            <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className="nav__link underline"
                onClick={linkAction}
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav__item nav__link underline" onClick={logOut}>
                Déconnexion
            </li>
          </ul>
          }
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" onClick={showMenu}></i>
          <i className="bx bx-x" onClick={hideMenu}></i>
        </div>
      </nav>
    </header>
  );
}