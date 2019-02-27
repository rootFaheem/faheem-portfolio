import React, { Component } from "react";

// import { Link } from "react-router-dom";

import "./Articles.css";
// import Test from "../../../assets/showcase.jpg";

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

  time =
    this.monthNames[this.d.getMonth()] +
    " " +
    new Date().getDay() +
    ", " +
    new Date().getFullYear();

  updated = "updated by " + this.time;

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
              <div className="col-md-3"> in row 1 col 1 its row 1 col 1</div>
              <div className="col-md-6"> in row 1 col 1 row 1 col 2</div>
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
