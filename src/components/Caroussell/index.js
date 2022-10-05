// == Import npm
import React from 'react';
import Slider from 'react-slick';

// == Import
import maestra from 'src/assets/img/maestra.png';
import githubApi from 'src/assets/img/github-api.png';
import oRecipes from 'src/assets/img/oRecipes.png';
import socket from 'src/assets/img/socket.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

// == Composant

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="projet-container">
      <h2 className="projet__title About__title">Mes projets</h2>
      <Slider {...settings}>
        <div className="projet">
          <a href="https://maestra.surge.sh">
            <img src={maestra} alt="maestra" className="maestra-project allProjects" />
          </a>
          <div className="projet__content">
            <p className="maestra-text projet__text">
              Maestra est un projet de fin de formation qui regroupe différentes pilules
              contraceptives et qui permet de laisser des avis dessus.
              <br />
              <br />
              <br />
              <a href="https://maestra.surge.sh" className="clickMe">
                Cliquez ici pour voir le projet
              </a>
            </p>
          </div>
        </div>

        <div className="projet">
          <a href="http://api-github-oclock.surge.sh/">
            <img src={githubApi} alt="GithubApi" className="github-project allProjects" />
          </a>
          <div className="projet__content">
            <p className="github-text projet__text">
              Projet réalisé durant ma spécialisation. C'est un site qui permet de rechercher des
              repository sur GitHub.
              <br />
              <br />
              <br />
              <a href="http://api-github-oclock.surge.sh/" className="clickMe">
                Cliquez ici pour voir le projet
              </a>
            </p>
          </div>
        </div>

        <div className="projet">
          <a href="https://github.com/ArnaudB14/oRecipes">
            <img src={socket} alt="socket" className="socket-project allProjects" />
          </a>
          <div className="projet__content">
            <p className="socket-text projet__text">
              Découverte de socket.IO.
              <br />
              <br />
              <br />
              <a href="https://github.com/ArnaudB14/oRecipes" className="clickMe">
                Cliquez ici pour voir le projet
              </a>
            </p>
          </div>
        </div>

        <div className="projet">
          <a href="https://github.com/ArnaudB14/socket.io">
            <img src={oRecipes} alt="oRecipes" className="orecipes-project allProjects" />
          </a>
          <div className="projet__content">
            <p className="orecipes-text projet__text">
              Première création et utilisation d'une API lors de ma spécialisation en React.
              <br />
              <br />
              <br />
              <a href="https://github.com/ArnaudB14/socket.io" className="clickMe">
                Cliquez ici pour voir le projet
              </a>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
