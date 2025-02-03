import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/LandingPage";
// import NextPage from "./NextPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/nextpage" element={<NextPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
