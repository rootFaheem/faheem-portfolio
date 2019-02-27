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

  updatedDate =
    this.monthNames[this.d.getMonth()] +
    " " +
    new Date().getDay() +
    ", " +
    new Date().getFullYear();

  componentDidMount() {
    let $ = window.$;
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  render() {
    return (
      <div className="container my-container">
        <div className="row my-row">
          <div className="col-md-9 col-xs-auto my-col">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={Test}
                  alt="article showcase"
                  className="imgShowcase"
                />
              </div>
              <div className="col-md-8">
                <div className="row">
                  <Link to="/blog/react-intro">
                    {" "}
                    <p className="h3 heading">
                      An introduction to React with Redux and axios i.e a http
                      client
                    </p>{" "}
                  </Link>
                </div>
                <div className="row justify-content-between">
                  <div className="col-auto">
                    {" "}
                    <small>in TOPIC</small>
                  </div>
                  <div className="col-auto">
                    <small>{this.updatedDate}</small>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-xs-auto my-col">row 1 col 2</div>
        </div>
        <div className="row my-row">
          <div className="col-sm-4 my-col">row 2 col 1</div>
          <div className="col-sm-8 my-col">row 2 col 2</div>
        </div>
      </div>
    );
  }
}

export default Article;
