import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
import BornAgainHowTo from "./pages/BornAgainHowTo";
import YaGroupArticle from "./pages/YaGroupArticle";
import AboutUs from "./pages/AboutUs";
import TopTucsonChurches from "./pages/TopTucsonChurches";
import JesusVisions from "./pages/HeavenlyVisionsArticle";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/YaGroupArticle" element={<YaGroupArticle />} />
        <Route path="/BornAgainHowTo" element={<BornAgainHowTo />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/JesusVisions" element={<JesusVisions />} />
        <Route path="/TopTucsonChurches" element={<TopTucsonChurches />} />
      </Routes>
    </Router>
  );
}

export default App;