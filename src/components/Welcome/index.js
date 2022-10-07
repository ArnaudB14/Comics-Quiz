// == Import npm
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

// == Import
import './style.scss';
import background from 'src/assets/img/captain-background-accueil.png';

// == Composant
export default function Accueil() {

  const {currentUser} = useContext(UserContext)
  return (
    <main className="accueil">
        <div className='accueil__background'>
          <img src={background} alt="Captain Background" />
        </div>
        <div className="accueil__container">
          <h1>{currentUser ? "Bienvenue" : "T'es qui ?"}</h1>
        </div>
    </main>
  );
}
