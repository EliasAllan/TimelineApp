import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage/homePage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Navbar from "./components/Navbar/navbar.jsx";
import TimelinePage from "./pages/TimelinePage/Timelinereactpage.jsx";
import Signup from './pages/Signup/Signup.jsx';
import Login from './pages/Login/Login.jsx';
// import SingleDeck from './pages/SingleDeck';
// import Profile from './pages/Profile';
// import Create from './pages/Create';
// import Delete from './pages/Delete'
// import Header from './components/Header';
// import Footer from './components/Footer';


function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/timelinePage" element={<TimelinePage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </Router> 
    </>
  )
}

export default App
