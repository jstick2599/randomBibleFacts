import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
// import NextPage from "./NextPage";
import TestPage from "./pages/TestPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TestPage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
