import React, { Component } from "react";

import Article from "./Article/Article";
import "./Articles.css";

class Articles extends Component {
  state = {
    ArticleData: {
      header: "An introduction to React, Setting-up a Reac Project",
      topic: "React",
      age: 50,
      eyeColor: "blue"
    }
  };

  render() {
    return (
      <div className="container my-container">
        <div className="row ">
          <div className="col-md-9 col-auto">
            <Article />
            <Article />
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
