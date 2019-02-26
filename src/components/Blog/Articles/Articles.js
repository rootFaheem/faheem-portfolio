import React, { Component } from "react";

// import { Link } from "react-router-dom";

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
      <div className="container ">
        <div className="row ">
          <div className="col-sm-9 bg-light">
            <div className="row">
              <div className="col-sm-4" />
              <div className="col-sm-8">col-sm-8 internal</div>
            </div>
          </div>
          <div className="col-sm-3 bg-dark">col-sm-3</div>
        </div>
      </div>
    );
  }
}

export default Article;
