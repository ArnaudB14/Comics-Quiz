// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomeBackground from 'src/assets/img/home.jpg';

// == Import
import './style.scss';
import Header from "src/components/Header";
import Homepage from "src/components/Homepage";
import About from "src/components/About";

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
    </Switch>
  </div>
);

// == Export
export default App;
