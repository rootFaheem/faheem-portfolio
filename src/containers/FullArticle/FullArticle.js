import React, { Component } from "react";

import "./FullArticle.css";
import nextgenjs from "../../assets/Article/nextgenjs.jpeg";
import Footer from "../../components/Layout/Footer/Footer";

class FullArticle extends Component {
  render() {
    return (
      <div>
        <div className="container FullArticle">
          <div className="row">
            <p className="h3 articlehead">
              What the heck is Next-Generation Javascript?
            </p>
          </div>
          <hr />

          <div>
            <img className=" responsiveImg" src={nextgenjs} alt="article" />
          </div>
          <p className="articleText">
            First thing first, as we know Javascript is scripting language for
            web-pages. Like other languages are evolving and keep adding new
            features fixing issues from previous experience, Javascript is also
            do the same. <br /> ECMAScript is standard that is used to define
            the Javascript fetures. ECMAScript 5.1 was introduced in 2012.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FullArticle;
