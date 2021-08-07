// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Homepage = () => (
  <main className="Homepage">
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <span className="home__greeting">Hello, My name is</span>
          <h1 className="home__name">Arnaud Barbey</h1>
          <span className="home__profession">Développeur Web</span>
          <a download="" href="assets/cv.pdf" className="button"></a>
        </div>

        <div className="home__social">
          <a href="#" className="home__social-icon"><i class='bx bxl-linkedin-square'></i></a>
          <a href="#" className="home__social-icon"><i class='bx bxl-github' ></i></a>
        </div>

        <div className="home__img">
          <img src="assets/img/home.jpg" alt="" />
        </div>
      </div>
    </section>
  </main>
);

// == Export
export default Homepage;
