import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button.tsx";
import QuizList from "../components/QuizList.tsx";

//Kvizove ce uzeti iz bekenda kada projekti budu povezani, sada je sve hardkodovano
const quizzes = [
  "Geografski kviz",
  "Istorijski kviz",
  "Muzicki kviz",
  "Sportski kviz",
  "TV kviz",
];

const HomePage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const navigate = useNavigate();

  const onQuizSelect = (quizName) => {
    setSelectedQuiz(quizName);
  };

  const handleButtonClick = () => {
    if (selectedQuiz) {
      console.log(`Odabran je: ${selectedQuiz}`);
      navigate("/quiz");
    } else {
      console.log("Niste izabrali kviz");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                <QuizList items={quizzes} onSelectItem={onQuizSelect} />
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8 text-center">
          <div className="card">
            <div className="card-body">
              <h1 className="display-4">Dobrodošli u kviz!</h1>
              <p className="lead">Testirajte svoje znanje!</p>
              <Button onClick={() => handleButtonClick()}>Započni kviz!</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
