import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from "./components/Button.tsx";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dobrodosli u kviz!</h1>
      <p>Testirajte svoje znanje!</p>
      <Button onClick={()=> navigate('/quiz')}>Zapocni kviz!</Button>
    </div>
  );
};

export default HomePage;
