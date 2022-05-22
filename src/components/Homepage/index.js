// == Import npm
import React from 'react';
import arnaud from 'src/assets/img/arnaud.png'

// == Import
import './style.scss';

// == Composant
const Homepage = () => (
  <main className="Homepage">
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <span className="home__greeting">Hello, je suis</span>
          <h1 className="home__name">Arnaud Barbey</h1>
          <span className="home__profession">Développeur Web Front-end</span>
          <a href="../assets/img/CV.pdf" className="button .button-light" download target="_blank">Mon CV</a>
          <div className="home__photo">
            <img className="home__card-photo" src={arnaud} />
          </div>
        </div>
        <div className="home__social">
          <a href="https://www.linkedin.com/in/arnaud-barbey/" target="_blank" className="home__social-icon"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://github.com/ArnaudB14" target="_blank" className="home__social-icon"><i className='bx bxl-github' ></i></a>
        </div>
      </div>
    </section>
  </main>
);

// == Export
export default Homepage;
