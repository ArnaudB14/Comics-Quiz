// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import joker from 'src/assets/img/joker-laugh.png';
import background from 'src/assets/img/joker-background-404.png';

// == Composant
export default function Error404() {
  return (
    <div className="Error404">
      <div className='Error404__background'>
        <img src={background} alt="Joker Background" />
      </div>
      <div className='Error404__container'>
        <p className="Error404__content">Le Joker t'a piégé ! Cette page n'existe pas.</p>
        <h1 className="Error404__title">Erreur 404</h1>
        <Link to="/" className="Error404__link">
          Revenir à l'accueil
        </Link>
        <div className='Error404__img1'>
          <img src={joker} alt="Joker Laugh" />
        </div>
        <div className='Error404__img2'>
          <img src={joker} alt="Joker Laugh" />
        </div>
      </div>
    </div>
    
  );
}
