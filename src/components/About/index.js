// == Import npm
import React from 'react';
import Caroussell from 'src/components/Caroussell'

// == Import img 

import html from "src/assets/img/html-svg.svg"
import css from "src/assets/img/css-svg.svg"
import js from "src/assets/img/js-svg.svg"
import vue from "src/assets/img/vue-svg.svg"
import react from "src/assets/img/react-svg.svg"
import redux from "src/assets/img/redux-svg.svg"
import sass from "src/assets/img/sass-svg.svg"
import node from "src/assets/img/node-svg.svg"
import responsive from "src/assets/img/responsive-svg.svg"
import github from "src/assets/img/github-svg.svg"
import agile from "src/assets/img/agile-svg.svg"
import php from "src/assets/img/php-svg.svg"
import symfony from "src/assets/img/symfony-svg.svg"
import wordpress from "src/assets/img/wordpress-svg.svg"

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
      
      <div className="wrapperSkills">
          <div><img src={html} alt="html-svg" /><p>Html</p></div>
          <div><img src={css} alt="css-svg" /><p>Css</p></div>
          <div><img src={js} alt="js-svg" /><p>Javascript</p></div>
          <div><img src={react} alt="react-svg" /><p>React</p></div>
          <div><img src={redux} alt="redux-svg" /><p>Redux</p></div>
          <div><img src={sass} alt="sass-svg" /><p>Sass</p></div>
          <div><img src={responsive} alt="responsive-svg" /><p>Responsive Design</p></div>
          <div><img src={github} alt="github-svg" /><p>Github</p></div>
          <div><img src={agile} alt="agile-svg" /><p>Agile</p></div>
          <div><img src={php} alt="php-svg" /><p>PHP</p></div>
        </div>

      <h2 className="skillsToLearn__title About__title">Ce que je souhaite apprendre</h2>
      <div className="wrapperSkills">
          <div><img src={vue} alt="vue-svg" /><p>Vue.js</p></div>
          <div><img src={node} alt="node-svg" /><p>Node.js</p></div>
          <div><img src={symfony} alt="symfony-svg" /><p>Symfony</p></div>
          <div><img src={wordpress} alt="wordpress-svg" className="wordpress-logo"/><p>Wordpress</p></div>
        </div>
    </div>
  </div>
)};

// == Export
export default About;

