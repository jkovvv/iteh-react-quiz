import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-page">
      <h1>Dobrodosli u kviz!</h1>
      <p>Testirajte svoje znanje!</p>
      <button onClick={startQuiz}>Zapocni kviz</button>
    </div>
  );
};

export default HomePage;
