import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  
    return (
      <>
      
    <header>
        <nav>
            <ul id = "navbar">
            <Link to="/" className = "navbar-items">
                    Home
                </Link>
                <Link to="/dashboard" className = "navbar-items">
                    Dashboard
                </Link>
                <Link to="/login" className = "navbar-items">
                    Login
                </Link>
                {/* <Link to="/login" className = "navbar-items">
                    Logout
                </Link> */}
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