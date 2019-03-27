import React, { Component } from "react";

import Article from "./Article/Article";
import "./Articles.css";

import nextgenjs from "../../../assets/Article/nextgenjs.jpeg";
import react from "../../../assets/../assets/Article/react.png";
import node from "../../../assets/../assets/Article/nodeexpress.png";

class Articles extends Component {
  updatedDate0 = "February 25, 2019";
  updatedDate1 = "February 28, 2019";
  updatedDate2 = "March 2, 2019";

  state = {
    article0: {
      heading: "What the heck is Next-Generation Javascript?",
      category: "Javascript",
      subheading:
        "In this article you will learn about next-generation javascript feature. There features are shown by example.",
      uploadedDate: this.updatedDate0,
      imgURL: nextgenjs,
      link: "/blog/next-generation-javascript"
    },
    article1: {
      heading:
        "An introduction to React, Build a React App from Scratch. And how to setup a dev environment for React",
      category: "React",
      subheading:
        "In this article you will learn a very basics of React. And also how to setup a React project from scratch. ",
      uploadedDate: this.updatedDate1,
      imgURL: react,
      link: "/blog/react-introduction"
    },
    article2: {
      heading:
        "An introduction to Node.js and Express. Build a Node App from Scratch.",
      category: "Node",
      subheading:
        "In this article you will learn a very basics of Node.js and Express Framework. And also how to setup a Node.js with Express project from scratch.",
      uploadedDate: this.updatedDate2,
      imgURL: node,
      link: "/blog/node-express-introduction"
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
        </div>
      </div>
    );
  }
}

export default Articles;
