import React from "react";

import "./Navbar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top hnav">
        <div className="container">
          <a href="/" className="navbar-brand">
            faheem
          </a>
          <button
            className="navbar-toggler "
            data-toggle="collapse"
            data-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon container"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
