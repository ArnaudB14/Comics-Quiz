// == Import npm
import React, { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

// == Import
import './style.scss';
import background from 'src/assets/img/flash-background-connexion.png';

// == Composant
export default function Inscription() {

  const { signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([])

  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value,
      )
      formRef.current.reset();
      setValidation("");
      navigate("/");

    } catch {
      setValidation("Email ou Mot de passe incorrect")
    }
  }

  return (
    <main className="connexion">
      <div className='connexion__background'>
        <img src={background} alt="Flash Background" />
      </div>
      <form 
      ref={formRef}
      onSubmit={handleForm}
      >
        <div className="connexion__container">
          {/* <input
            className="app-form-control pseudo"
            placeholder="Pseudo"
            name="pseudo"
            tabIndex="1"
            required
            ref={addInputs}
          /> */}
          <input
            className="app-form-control email"
            placeholder="Email"
            type="email"
            name="email"
            tabIndex="2"
            required
            ref={addInputs}
          />
          <input
            className="app-form-control password"
            placeholder="Mot de passe"
            type="password"
            name="password"
            tabIndex="3"
            required
            ref={addInputs}
          />
          <p className='connexion__container__validation'>{validation}</p>
          <div className="app-form-group button">
            <button type="submit" className="app-form-button">
              Connexion
            </button>
          </div>
          <Link to="/inscription" className='go-to-login'>Nouveau sur Comics Quiz ? S'inscrire maintenant.</Link>
        </div>
        
      </form>
      
    </main>
  );
}