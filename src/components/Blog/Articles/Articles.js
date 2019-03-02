import React, { Component } from "react";

import Article from "./Article/Article";
import "./Articles.css";

import nextgenjs from "../../../assets/Article/nextgenjs.jpeg";
import react from "../../../assets/../assets/Article/react.png";
import node from "../../../assets/../assets/Article/nodeexpress.png";

class Articles extends Component {
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

  state = {
    article0: {
      heading: "What the heck is Next-Generation Javascript?",
      category: "Javascript",
      subheading:
        "In this article you will learn about next-generation javascript feature. There features are shown by example.",
      uploadedDate: this.updatedDate,
      imgURL: nextgenjs,
      link: "/blog/react-intro"
    },
    article1: {
      heading:
        "An introduction to React, Build a React App from Scratch. And how to setup a dev environment for React",
      category: "React",
      subheading:
        "In this article you will learn a very basics of React. And also how to setup a React project from scratch. ",
      uploadedDate: this.updatedDate,
      imgURL: react,
      link: "/blog/react-intro"
    },
    article2: {
      heading:
        "An introduction to Node.js and Express. Build a Node App from Scratch.",
      category: "Node",
      subheading:
        "In this article you will learn a very basics of Node.js and Express Framework. And also how to setup a Node.js with Express project from scratch.",
      uploadedDate: this.updatedDate,
      imgURL: node,
      link: "/blog/node-express-intro"
    }
  };

  render() {
    return (
      <div className="container my-container">
        <div className="row ">
          <div className="col-md-9 col-auto">
            <Article
              heading={this.state.article0.heading}
              category={this.state.article0.category}
              subheading={this.state.article0.subheading}
              uploadedDate={this.state.article0.uploadedDate}
              imgURL={this.state.article0.imgURL}
              link={this.state.article0.link}
            />
            <Article
              heading={this.state.article1.heading}
              category={this.state.article1.category}
              subheading={this.state.article1.subheading}
              uploadedDate={this.state.article1.uploadedDate}
              imgURL={this.state.article1.imgURL}
              link={this.state.article1.link}
            />
            <Article
              heading={this.state.article2.heading}
              category={this.state.article2.category}
              subheading={this.state.article2.subheading}
              uploadedDate={this.state.article2.uploadedDate}
              imgURL={this.state.article2.imgURL}
              link={this.state.article2.link}
            />
          </div>

          <div
            className="col-md-3 col-auto text-center"
            style={{ color: "green" }}
          >
            <p>react (7)</p>
            <p>redux (4)</p>
            <p>node (5)</p>
            <p>JavaScript (12)</p>
            <p>Bootstrap (8)</p>
            <p>Machine Learning (3)</p>
            <p>Web Development (14)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
