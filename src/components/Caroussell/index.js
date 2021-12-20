// == Import npm
import React from 'react';
import maestra from 'src/assets/img/maestra.png'
import githubApi from 'src/assets/img/github-api.png'
import oRecipes from 'src/assets/img/oRecipes.png'
import socket from 'src/assets/img/socket.png'

const Carousel = require( '3d-react-carousal').Carousel;

// == Import
import './style.scss';

// == Composant
const Caroussell = () => {
  let slides = [
    <div className="projet">
      <a href="https://maestra.surge.sh"><img src={maestra} alt="maestra" className="maestra-project allProjects"/></a>
      <p className="maestra-text">Maestra est un projet de fin de formation qui regroupe différentes pilules contraceptives et qui permet de laisser des avis dessus.</p>
      <a href="https://maestra.surge.sh" className="clickMe">Cliquez ici pour voir le projet</a>
     </div>
    ,
    <div className="projet">
      <div className="projet">
        <a href="http://api-github-oclock.surge.sh/"><img src={githubApi} alt="GithubApi" className="github-project allProjects"/></a>
        <p className="github-text">Projet réalisé durant ma spécialisation. C'est un site qui permet de rechercher des repository sur GitHub.</p>
        <a href="http://api-github-oclock.surge.sh/" className="clickMe">Cliquez ici pour voir le projet</a>
     </div>
  </div>
  ,
  <div className="projet">
      <div className="projet">
        <a href="https://github.com/ArnaudB14/oRecipes"><img src={socket} alt="socket" className="socket-project allProjects"/></a>
        <p className="socket-text">Découverte de socket.IO.</p>
        <a href="https://github.com/ArnaudB14/oRecipes" className="clickMe">Cliquez ici pour voir le projet sur github</a>
     </div>
  </div>
  ,
  <div className="projet">
  <div className="projet">
    <a href="https://github.com/ArnaudB14/socket.io"><img src={oRecipes} alt="oRecipes" className="orecipes-project allProjects"/></a>
    <p className="orecipes-text">Première création et utilisation d'une API lors de ma spécialisation en React.</p>
    <a href="https://github.com/ArnaudB14/socket.io" className="clickMe">Cliquez ici pour voir le projet sur github</a>
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

