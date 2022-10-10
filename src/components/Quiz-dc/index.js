import React, {useContext, useState} from 'react'
import { data } from "src/utils/questions/dc";
import { Link } from 'react-router-dom';

import './style.scss';

import background from 'src/assets/img/greenarrow-background-dc-quiz.png';

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [myAnswer, setMyAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);
    const [show, setShow] = useState(false);
    const [clickAnswer, setClickAnswer] = useState(false);

    const checkAnswer = (answer) => {
      setMyAnswer(answer);
      setClickAnswer(true);
      if (answer === data[currentQuestion].correct) {
        setScore(score + 1);
      }

      document.querySelector(".quiz-dc__answers-list").style.pointerEvents = "none";
    };

    const resetPointer = () => {
      document.querySelector(".quiz-dc__answers-list").style.pointerEvents = "auto";
    }

    const reset = () => {
      setShow(false);
      setClickAnswer(false);
    };

    const finishHandler = () => {
      if (currentQuestion === data.length - 1) {
        setFinish(true);
      }
    };

    const startOver = () => {
      setCurrentQuestion(0);
      setFinish(false);
      setMyAnswer("");
      setScore(0);
    };

  if (finish) {
  return (
    <div className="quiz-dc">
      <div className='quiz-dc__background'>
        <img src={background} alt="Green Arrow Background" />
      </div>

      <div className="quiz-dc__container">
        <h3 className="quiz-dc__title">
          {`Ton score est de
          ${score}/${data.length}
        `}
        </h3>
        {data.map((data) => (
          <li key={data.id} className="quiz-dc__end-answers">
              <span>Question: {data.question} Réponse: {data.correct}</span>
          </li>
        ))}
        <button
          className="quiz-dc__start-over"
          onClick={() => startOver()}
          >
          Recommencer
        </button>
        <button
          className="quiz-dc__back-to-quiz"
          >
          <Link to="/">
           Retour à la liste des Quiz
          </Link>
        </button>
      </div>
    </div>
  );

  } else {

  return (
    <div className="quiz-dc">
        <div className='quiz-dc__background'>
          <img src={background} alt="Green Arrow Background" />
        </div>
      <div className="quiz-dc__container">
        <span className="quiz-dc__questions-number">
          Question : {`${currentQuestion + 1}/${data.length}`}
        </span>
        <span className="quiz-dc__questions-progression">
          Progression : {`${Math.round((currentQuestion + 1) / (data.length) * 100)}%`}
        </span>
        <h2 className="quiz-dc__questions">
          {data[currentQuestion].question}
        </h2>
        <div className="quiz-dc__answers-list">
          {data[currentQuestion].answers.map((answer) => (
            <div>
              <p
                key={answer.id}
                className={`answer ${
                myAnswer === answer
                ? myAnswer === data[currentQuestion].correct
                ? "correctAnswer"
                : "incorrectAnswer"
                : null
                }`}
                style={
                  myAnswer === answer
                  ? myAnswer === data[currentQuestion].correct
                  ? {backgroundColor : "green", color : "white"}
                  : {backgroundColor : "red", color : "white"}
                  : {backgroundColor : "white"}
                }
                onClick={() => checkAnswer(answer)}
                >
                {answer}
              </p>
            </div>
          ))}
        </div>
     {currentQuestion < data.length - 1 && (
      <button
        className="quiz-dc__next-question"
        onClick={() => {
        setCurrentQuestion(currentQuestion + 1);
        resetPointer();
        reset();
        }}
        >
        Question suivante
      </button>
    )}
    {currentQuestion === data.length - 1 && (
      <button
        className="quiz-dc__finish"
        onClick={() => finishHandler()}
        >
        Voir mon résultat
      </button>
    )}
    {show && (
      <p className="quiz-dc__correct-answer">
        Réponse : {data[currentQuestion].correct}
      </p>
    )}
    </div>
  </div>
  );
  }
}