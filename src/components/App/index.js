// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// == Import
import './style.scss';
import Header from "src/components/Header";
import Homepage from "src/components/Homepage";

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
