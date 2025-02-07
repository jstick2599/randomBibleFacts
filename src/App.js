import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
import BornAgainHowTo from "./pages/BornAgainHowTo";
import YaGroupArticle from "./pages/YaGroupArticle";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/YaGroupArticle" element={<YaGroupArticle />} />
        <Route path="/BornAgainHowTo" element={<BornAgainHowTo />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;