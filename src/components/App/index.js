// == Import npm
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// == Import
import './style.scss';
import Header from 'src/components/Header';
import Accueil from 'src/components/Welcome';
import Quiz from 'src/components/Quiz';
import Connexion from 'src/components/Connexion';
import Inscription from 'src/components/Inscription';
import Error404 from 'src/components/Error404';
import Footer from 'src/components/Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
