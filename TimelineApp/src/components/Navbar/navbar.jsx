import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  
    return (
      <>
      
    <header>
        <nav>
            <ul id = "navbar">
                <li className = "navbar-items">
                    Home
                </li>
                <li className = "navbar-items">
                    Dashboard
                </li>
                <li className = "navbar-items">
                    Login
                </li>
                <li className = "navbar-items">
                    Logout
                </li>
                <Link to="/timelinePage" className = "navbar-items">
                    Timeline
                </Link>
            </ul>
        </nav>
        <section id="title-section">
            <h1>
                My History
            </h1>
        </section>
    </header>

    </>
    )
  }

  export default Navbar