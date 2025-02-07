
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
// import NextPage from "./NextPage";
import BornAgainHowTo from "./pages/BornAgainHowTo";
import YaGroupArticle from "./pages/YaGroupArticle";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/YaGroupArticle" element={<YaGroupArticle />} />
        <Route path="/BornAgainHowTo" element={<BornAgainHowTo />} />
      </Routes>
    </Router>
  );
}

export default App;
