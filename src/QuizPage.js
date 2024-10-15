import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from "./components/Button.tsx";

const questions = [
  { question: 'Probno pitanje 1?', options: ['Ne', 'Da', 'Jok', 'Nije'], answer: 'Da' },
  { question: 'Probno pitanje 2?', options: ['Ne', 'Da', 'Jok', 'Nije'], answer: 'Da' },
  // Dodaj više pitanja po potrebi
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const checkAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', { state: { score } });
    }
  };

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <Button key={index} onClick={() => checkAnswer(option)}>
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
