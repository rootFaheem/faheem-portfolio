import React, { Component } from "react";
import { Link } from "react-router-dom";

import react from "../../../../assets/Article/react.png";

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

  updatedDate =
    this.monthNames[this.d.getMonth()] +
    " " +
    new Date().getDay() +
    ", " +
    new Date().getFullYear();

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <img src={react} alt="article showcase" className="imgShowcase" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-auto">
                <Link to="/blog/react-intro">
                  {" "}
                  <p className="h3 heading">
                    An introduction to React with Redux and axios i.e a http
                    client
                  </p>{" "}
                </Link>
              </div>
            </div>
            <div
              className="row justify-content-between"
              style={{ color: "#999999" }}
            >
              <div className="col-auto">
                {" "}
                <small>in </small>{" "}
                <small style={{ color: "Green" }}>TOPIC</small>
              </div>
              <div className="col-auto">
                <small>{this.updatedDate}</small>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                {" "}
                <p style={{ color: "#293347" }}>
                  In this article you will learn about basics of React, Redux.
                  And will Learn how to build the reusable component. Before
                  this you will learn how to setup a React+Redux Environmet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Article;
