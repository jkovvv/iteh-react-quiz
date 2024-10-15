import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 };

  const restartQuiz = () => {
    navigate('/');
  };

  return (
    <div className="results-page">
      <h1>Tvoj rezultat: {score}</h1>
      <p>Cestitam!</p>
      <button onClick={restartQuiz}>Igraj ponovo</button>
    </div>
  );
};

export default ResultsPage;
