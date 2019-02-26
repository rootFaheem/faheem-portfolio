import React from "react";

import "./Blog.css";

import Test from "../../assets/showcase.jpg";

const monthNames = [
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

const d = new Date();

const about = () => {
  return (
    <div className="Blog">
      <div className="container">
        <div>
          <p className=" text-center h1">My Blog! </p>
          <hr />
        </div>
        <div>
          <div className="main-content bg-light">
            <div>
              <img src={Test} alt="Headshot pic" />
              <p className="h4" id="title">
                {" "}
                How to set a boierplate for MERN stack with GraphQL
              </p>
            </div>
            <div id="title">
              <p> by @faheem </p>
              <small>
                {monthNames[d.getMonth()] +
                  " " +
                  new Date().getDay() +
                  ", " +
                  new Date().getFullYear()}
              </small>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default about;
