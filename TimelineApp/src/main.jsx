import React from "react";
import ReactDOM from "react-dom/client";
import TimelinePage from "./pages/TimelinePage/Timelinereactpage.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/timelinePage" element={<TimelinePage />} />
      {/* <Navbar/>
    <TimelinePage /> */}
    </Routes>
    </Router>
  </React.StrictMode>
);
