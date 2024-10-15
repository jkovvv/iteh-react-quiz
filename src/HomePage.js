import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from "./components/Button.tsx";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="display-4">Dobrodošli u kviz!</h1>
          <p className="lead">Testirajte svoje znanje!</p>
          <Button onClick={()=> navigate('/quiz')}>Započni kviz!</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
