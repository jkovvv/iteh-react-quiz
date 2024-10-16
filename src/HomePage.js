import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./components/Button.tsx";
import QuizList from "./components/QuizList.tsx";

// Primer liste kvizova
const quizzes = [
  'Geografski kviz',
  'Istorijski kviz',
  'Muzicki kviz',
  'Sportski kviz',
  'TV kviz',
];

const HomePage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null); // State to store the selected quiz
  const navigate = useNavigate();

  const onQuizSelect = (quizName) => {
    setSelectedQuiz(quizName); // Update the state with the selected quiz name
  };

  const handleButtonClick = () => {
    if (selectedQuiz) {
      console.log(`Odabran je: ${selectedQuiz}`);
      navigate('/quiz')
      // Optional: navigate to a different route or take some action
    } else {
      console.log("Niste izabrali kviz");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
          <QuizList items= {quizzes} heading="Kvizovi" onSelectItem={onQuizSelect}></QuizList>
          </ul>
        </div>
        <div className="col-md-8 text-center">
          <h1 className="display-4">Dobrodošli u kviz!</h1>
          <p className="lead">Testirajte svoje znanje!</p>
          <Button onClick={() => handleButtonClick()}>Započni kviz!</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
