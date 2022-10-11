// == Import npm
import React, { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// == Import
import './style.scss';
import background from 'src/assets/img/flash-background-connexion.png';

// == Composant
export default function ForgotPassword() {

  const { signIn, resetPassword } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([])

  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const formRef = useRef();

  const forgotPassword = async (e) => {
    const email = inputs.current[0].value;
    e.preventDefault();

    try {
      const cred = await resetPassword(email).then(() => (inputs.current[0].value = "")) 
      
      toast.success('Email de récupération envoyé avec succès', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        console.log(cred)

    } catch (err) {

      if(err.code === "auth/user-not-found") {
        setValidation("Veuillez saisir une adresse mail valide")
      }
    }
  }

  return (
    <main className="forgot-password">
      <div className='forgot-password__background'>
        <img src={background} alt="Flash Background" />
      </div>
      <form 
      ref={formRef}
      >
        <div className="forgot-password__container">
        <p className='forgot-password__container__mail'>Entrez votre adresse mail afin de recevoir un email de récupération</p>
          <input
            className="app-form-control email"
            placeholder="Email"
            type="email"
            name="email"
            tabIndex="1"
            required
            ref={addInputs}
          />
          <p className='forgot-password__container__validation'>{validation}</p>
          <div className="app-form-group button">
            <button onClick={forgotPassword} className="app-form-button">
              Envoyer le mail de récupération
            </button>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
          </div>
          <Link to="/connexion" className='go-to-connexion'>Retour à la page de connexion</Link>
        </div>
        
      </form>
      
    </main>
  );
}