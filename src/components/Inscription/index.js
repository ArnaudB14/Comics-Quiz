// == Import npm
import React, { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

// == Import
import './style.scss';
import background from 'src/assets/img/batman-background-inscription.png';

// == Composant
export default function Inscription() {

  const { signUp } = useContext(UserContext);

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

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("Votre mot de passe doit contenir au moins 6 caractères")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne correspondent pas")
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value,
      )
      formRef.current.reset();
      setValidation("");
      navigate("/");

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("L'email n'est pas au format valide")
      }

      if(err.code === "auth/email-already-in-use") {
        setValidation("L'email est déjà utilisé")
      }
    }
  }

  return (
    <main className="inscription">
      <div className='inscription__background'>
        <img src={background} alt="Batman Background" />
      </div>
      <form 
      ref={formRef}
      onSubmit={handleForm}
      >
        <div className="inscription__container">
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
          <input
            className="app-form-control repeatPassword"
            placeholder="Confirmer le mot de passe"
            type="password"
            name="password"
            tabIndex="4"
            required
            ref={addInputs}
          />
          <p className='inscription__container__validation'>{validation}</p>
          <div className="app-form-group button">
            <button type="submit" className="app-form-button">
              Inscription
            </button>
          </div>
          <Link to="/connexion" className='already-signup'>Déjà inscrit ? Connectez-vous.</Link>
        </div>
        
      </form>
      
    </main>
  );
}