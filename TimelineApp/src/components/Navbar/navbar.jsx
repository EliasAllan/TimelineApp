import React from "react";

function Navbar() {
  
    return (
      <>
      
    <header>
        <nav>
            <ul id = "navbar">
                <li class = "navbar-items">
                    Home
                </li>
                <li class = "navbar-items">
                    Dashboard
                </li>
                <li class = "navbar-items">
                    Login
                </li>
                <li class = "navbar-items">
                    Logout
                </li>
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