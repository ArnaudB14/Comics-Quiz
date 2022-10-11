// == Import npm
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// == Import
import './style.scss';
import Header from 'src/components/Header';
import Accueil from 'src/components/Welcome';
import QuizMarvel from 'src/components/Quiz-marvel';
import QuizDC from 'src/components/Quiz-dc';
import Personnages from 'src/components/Personnages';
import Connexion from 'src/components/Connexion';
import ForgotPassword from 'src/components/ForgotPassword'
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
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/quiz-marvel" element={<QuizMarvel />} />
        <Route path="/quiz-dc" element={<QuizDC />} />
        <Route path="/liste-personnages" element={<Personnages />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
