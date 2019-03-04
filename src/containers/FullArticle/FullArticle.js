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
            web-pages.Like other languages e.g. Java, PHP, Python etc. are
            evolving and keep adding new features, fixing issues from previous
            experience. Javascript is also doing the same. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the
            way ECMAScript is standard that is used to define the Javascript
            fetures. ECMAScript 5.1 was introduced in 2012. And the 6th major
            upgrade was done in 2015 i.e ECMAScript6. And after this ECMAScript
            releases their upgrade on yearly basis. so in 2018 the upgrade was
            done and in this article we will be taling about the same. <br />
            So let's start from very first one:
            <ol>
              <li className="subhead h3 bold"> let and const: </li>
            </ol>
            Two new keywords has been introduced that are <strong>let</strong>{" "}
            and <strong>const</strong>. Previously <strong>var</strong> keyword
            is used for the variable definition. But there were something that
            developer requires to make their 
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FullArticle;
