// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeBackground from 'src/assets/img/home.jpg';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './style.scss';
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Error404 from 'src/components/Error404';

// == Composant
const App = () => (
  <div className="app">
    <div className="app__img">
      <img src={HomeBackground} alt="" />
    </div>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
