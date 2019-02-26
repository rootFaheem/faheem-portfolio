import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Articles.css";
import Test from "../../../assets/showcase.jpg";

class Article extends Component {
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  d = new Date();

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <div className="main-content bg-light">
              <div>
                <img src={Test} alt="Headshot pic" />
                <Link to="/blog/react-intro">
                  <p className="h5 font-weight-bold" id="title">
                    {" "}
                    How to set a boilerplate for MERN stack with GraphQL and
                    Next.js and Redux Thunk!{" "}
                  </p>

                  <p className="text-muted" id="subhead">
                    In this article, we will go witht the every steps from
                    installation to setup. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </Link>
              </div>
              <div />

              <div>
                <p id="subhead">
                  {" "}
                  by @faheem <br />
                  <small>
                    {this.monthNames[this.d.getMonth()] +
                      " " +
                      new Date().getDay() +
                      ", " +
                      new Date().getFullYear()}
                  </small>{" "}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
