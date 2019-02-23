import React from "react";
import { Route, NavLink } from "react-router-dom";

import About from "../../About/About";
import Portfolio from "../../Portfolio/Portfolio";
import Blog from "../../Blog/Blog";
import Landing from "../MainContent/Landing/Landing";
import "./Navbar.css";

const navbar = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-sm navbar-dark  fixed-top"
          id="myNavbar"
        >
          <div className="container">
            <NavLink to="/" exact className="navbar-brand text-white ">
              faheem
            </NavLink>
            <button
              className="navbar-toggler "
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon container"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav" id="myMargin">
                <li className="nav-item">
                  <NavLink to="/about" exact className="nav-link text-white  ">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    exact
                    className="nav-link text-white "
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" exact className="nav-link text-white ">
                    blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="#socialLinks">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="tw-ic mr-3 cir"
                    role="button"
                    href="https://twitter.com/rootfaheem"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-lg fa-envelope" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="li-ic mr-3 cir"
                    role="button"
                    href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-lg fa-linkedin-in" />
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
      </header>
      <div>
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/" exact component={Landing} />
      </div>
    </div>
  );
};

export default navbar;
