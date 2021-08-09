// == Import npm
import React from 'react';
import maestra from 'src/assets/img/maestra.png'
import githubApi from 'src/assets/img/github-api.png'

const Carousel = require( '3d-react-carousal').Carousel;

// == Import
import './style.scss';

// == Composant
const Caroussell = () => {
  let slides = [
    <div className="projet">
      <a href="https://maestra.surge.sh"><img src={maestra} alt="maestra" className="maestra-project"/></a>
      <p className="maestra-text">Maestra est un projet de fin de formation qui regroupe différentes pilules contraceptives et qui permet de laisser des avis dessus.</p>
     </div>
    ,
    <div className="projet">
      <div className="projet">
        <a href="http://api-github-oclock.surge.sh/"><img src={githubApi} alt="GithubApi" className="github-project"/></a>
        <p className="github-text">Projet réalisé durant ma spécialisation. C'est un site qui permet de rechercher des repository sur GitHub.</p>
     </div>
  </div>
  ]
  return(
    <div className="projects">
    <h2 className="myWorks__title About__title">Mes projets</h2>
      <Carousel slides={slides} autoplay={false} interval={1000}/>
    </div>
)};

// == Export
export default Caroussell;

