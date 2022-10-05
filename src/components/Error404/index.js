// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Error404 = () => {
  return (
    <div className="Error404">
      <p className="Error404__content">La page demandée n'existe pas</p>
      <h1 className="Error404__title">Erreur 404</h1>
      <a href="#" className="Error404__link">
        Revenir à l'accueil
      </a>
    </div>
  );
};

// == Export
export default Error404;
