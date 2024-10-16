import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuestionCard from "./components/QuestionCard.tsx";
import Timer from "./components/Timer.tsx";

const questions = [
  // Dodaj vise pitanja po potrebi, svakako uzimace iz baze
  {
    question: "Probno pitanje 1?",
    options: ["Ne", "Da", "Jok", "Nije"],
    answer: "Da",
  },
  {
    question: "Probno pitanje 2?",
    options: ["Ne", "Da", "Jok", "Nije"],
    answer: "Da",
  },
  {
    question: "Probno pitanje 3?",
    options: ["Ne", "Da", "Jok", "Nije"],
    answer: "Da",
  },
  {
    question: "Probno pitanje 4?",
    options: ["Ne", "Da", "Jok", "Nije"],
    answer: "Da",
  },
  {
    question: "Probno pitanje 5?",
    options: ["Ne", "Da", "Jok", "Nije"],
    answer: "Da",
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const [refreshKey, setRefreshKey] = useState(0);

  const refreshDiv = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Za ponovo renderovanje diva (zbog timera)
  };

  const checkAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (option === questions[currentQuestionIndex].answer) {
        navigate("/results", { state: { score: score + 1 } });
      } else {
        navigate("/results", { state: { score } });
      }
    }
  };

  const handleAnswer = (option) => {
    checkAnswer(option);
    refreshDiv();
  };

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div key={refreshKey} className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <QuestionCard
            question={question}
            options={options}
            onAnswerSelect={handleAnswer}
          />
          <Timer
            duration={500}
            onTimeUp={() => console.log("Vreme je isteklo!")}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
