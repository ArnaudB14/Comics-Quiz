import React, { useRef } from 'react';
import './style.scss';

const ContactForm = () => {
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACTEZ</span>
                  <br />
                  <span>MOI</span>
                </div>
                <div className="app-contact">Téléphone : 06 80 71 15 46</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" value="ARNAUD BARBEY" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      name="email"
                      tabIndex="1"
                      ref={emailRef}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      name="message"
                      tabIndex="2"
                      ref={messageRef}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">
                      ENVOYER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
