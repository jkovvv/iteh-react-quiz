import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from './components/QuestionCard.tsx';
import Timer from './components/Timer.tsx';

const questions = [
  // Dodaj vise pitanja po potrebi, svakako uzimace iz baze
  { question: 'Probno pitanje 1?', options: ['Ne', 'Da', 'Jok', 'Nije'], answer: 'Da' },
  { question: 'Probno pitanje 2?', options: ['Ne', 'Da', 'Jok', 'Nije'], answer: 'Da' },
  
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
      if (option === questions[currentQuestionIndex].answer) {
        navigate('/results', { state: { score: score+1 } });
      }
      else{
        navigate('/results', { state: { score } });
      }
    }
  };

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div>
      <QuestionCard
        question={question}
        options={options}
        onAnswerSelect={checkAnswer}
      />
      <Timer
        duration={500}
        onTimeUp={() => console.log("Vreme je isteklo!")}
      />
    </div>
  );
};

export default QuizPage;
