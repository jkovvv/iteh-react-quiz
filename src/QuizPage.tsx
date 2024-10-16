import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import QuestionCard from "./components/QuestionCard.tsx";
import Timer, { TimerHandle } from "./components/Timer.tsx";

const questions = [
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
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const navigate = useNavigate();
  const timerRef = useRef<TimerHandle | null>(null);

  const [refreshKey, setRefreshKey] = useState(0);

  const checkAnswer = (option: string) => {
    setMaxPoints(maxPoints + 5000);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      if (timerRef.current) {
        setPoints(points + timerRef.current?.getTimeLeft());
      }
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", {
        state: {
          score:
            score + (option === questions[currentQuestionIndex].answer ? 1 : 0),
          points:
            points +
            (option === questions[currentQuestionIndex].answer &&
            timerRef.current
              ? timerRef.current?.getTimeLeft()
              : 0),
          maxPoints: maxPoints + 5000,
        },
      });
    }
  };

  const handleAnswer = (option: string) => {
    console.log(timerRef.current?.getTimeLeft());
    setRefreshKey((prev) => prev + 1);
    checkAnswer(option);
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
            ref={timerRef}
            duration={5000} // 5 sekundi
            onTimeUp={() => console.log("Vreme je isteklo!")}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
