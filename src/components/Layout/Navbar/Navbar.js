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
          <div className="collapse navbar-collapse" id="#socialLinks">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <a
                  className="tw-ic mr-3 cir"
                  role="button"
                  href="https://twitter.com/rootfaheem"
                >
                  <i className="fab fa-lg fa-twitter" />
                </a>
              </li>
              <li className="nav-item" href="www.google.com">
                <a
                  className="git-ic mr-3 cir"
                  role="button"
                  href="https://github.com/FaheemTech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-lg fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="email-ic mr-3 cir"
                  role="button"
                  href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-lg fa-envelope" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="dribbble-ic mr-3 cir"
                  role="button"
                  href="https://dribbble.com/faheemtech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-lg fa-dribbble" />
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
