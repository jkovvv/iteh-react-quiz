import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import QuizPage from "./QuizPage.tsx";
import ResultsPage from "./ResultsPage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const backgroundStyle = {
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    margin: 0,
  };

  return (
    <div style={backgroundStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
