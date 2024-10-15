import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from "./components/Button.tsx";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="display-4">Tvoj rezultat: {score}</h1>
          <p className="lead">Čestitam!</p>
          <Button onClick={()=> navigate('/')}>Igraj ponovo!</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
