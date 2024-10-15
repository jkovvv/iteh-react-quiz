import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from "./components/Button.tsx";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 };

  return (
    <div className="results-page">
      <h1>Tvoj rezultat: {score}</h1>
      <p>Cestitam!</p>
      <Button onClick={()=> navigate('/')}>Igraj ponovo!</Button>
    </div>
  );
};

export default ResultsPage;
