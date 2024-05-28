import React from 'react'
import ReactDOM from 'react-dom/client'
import TimelinePage from './pages/timeline-page/Timelinereactpage.jsx'
import Home from "./pages/home/home.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <TimelinePage />
  </React.StrictMode>,
)
