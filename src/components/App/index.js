// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import './style.scss';
import Header from 'src/components/Header';
// import Homepage from 'src/components/Homepage';
// import About from 'src/components/About';
// import Contact from 'src/components/Contact';
import Error404 from 'src/components/Error404';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      {/* <Route path="/" exact>
        <Homepage />
      </Route> */}
      {/* <Route path="/about" exact>
        <About />
      </Route> */}
      {/* <Route path="/contact" exact>
        <Contact />
      </Route> */}
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
