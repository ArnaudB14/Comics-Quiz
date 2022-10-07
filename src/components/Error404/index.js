// == Import npm
import React from 'react';

// == Import
import './style.scss';
import joker from 'src/assets/img/joker-laugh.png';

// == Composant
export default function Error404() {
  return (
    <div className="Error404">
      <p className="Error404__content">Le Joker t'a piégé ! Cette page n'existe pas.</p>
      <h1 className="Error404__title">Erreur 404</h1>
      <a href="#" className="Error404__link">
        Revenir à l'accueil
      </a>
      <div className='Error404__img1'>
        <img src={joker} alt="Joker Laugh" />
      </div>
      <div className='Error404__img2'>
        <img src={joker} alt="Joker Laugh" />
      </div>
    </div>
    
  );
}
