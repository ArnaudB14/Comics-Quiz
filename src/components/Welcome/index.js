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
          <img src={background} alt="Captain America Background" />
        </div>
        { currentUser ? (
        <div className="accueil__container">
            <h1 className='accueil__title'>Bienvenue</h1>
            <p className='accueil__content'>Voici la liste de nos Quiz :</p>
            <ul className='accueil__list'>
              <li><Link to="/quiz-marvel">Quiz Marvel</Link></li>
              <li><Link to="/quiz-dc">Quiz DC</Link></li>
            </ul>
        </div>
        ) :
        <div className="accueil__container">
          <h1 className='accueil__title'>Veuillez vous <Link to="/inscription" className='accueil__title__inscription'>inscrire</Link> ou vous <Link to="/connexion" className='accueil__title__connexion'>connecter</Link> pour voir la liste des quiz</h1>
        </div>
        }
    </main>
  );
}
