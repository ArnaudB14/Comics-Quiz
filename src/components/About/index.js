// == Import npm
import React from 'react';
import Caroussell from 'src/components/Caroussell'

// == Import
import './style.scss';

// == Composant
const About = () => {
  return(
  <div className="About">
    <div className="aboutMe">
      <h2 className="aboutMe__title About__title">À propos de moi</h2>
      <p className="aboutMe__text">
          Après 3 ans de licence informatique où j'ai pu aborder les premières notions de développement web tel que HTML, CSS et JavaScript, j'ai finalement décidé de mon consacrer entièrement à ça. J'ai donc intégré l'école et suivi une formation intensive de 6 mois où j'ai pu renforcé mes bases et apprendre de nouvelles technologies. J'ai aussi vu la méthode de travail Agile et l'utilisation de Github. 
          <br />
          <br />
          Pendant cette formation je me suis spécialisé sur du React, Redux et j'ai également vu les Hooks, le Scss, etc.
          <br />
          <br />
          <strong className="aboutMe__strong">Aujourdhui, mon objectif est d'acquérir de nouvelles compétences sur les technologies que je connais déjà ou sur d'autres stack. Je suis donc à la recherche d'une première expérience en tant que développeur web front end, stagiaire ou salarié.</strong>
      </p>
    </div>
    <Caroussell />
    <div className="skills">
      <h2 className="skills__title About__title">Mes compétences</h2>
    </div>
  </div>
)};

// == Export
export default About;

