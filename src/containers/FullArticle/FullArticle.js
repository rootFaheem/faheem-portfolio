import React, { Component } from "react";

import "./FullArticle.css";
import nextgenjs from "../../assets/Article/nextgenjs.jpeg";
import Footer from "../../components/Layout/Footer/Footer";
import letandvar from "../../assets/Article/letandvar.png";
import letandvar1 from "../../assets/Article/letandvar1.png";
import letandvar2 from "../../assets/Article/letandvar2.png";
import letandvar3 from "../../assets/Article/letandvar3.png";
import normalfunction from "../../assets/Article/normalfunction.png";
import arrowfunction from "../../assets/Article/arrowfunction.png";

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
          </p>
          <p className="subhead h3">
            <strong>1. let and const: </strong>
            <br />
          </p>
          Two new keywords has been introduced that are{" "}
          <strong className="highlightkeywords">let </strong>
          and <strong className="highlightkeywords">const</strong>.
          <div className="highlight">
            {" "}
            let and const is a way to define a variable in javascript. let
            behaves the same as the var. const is like constant that will never
            change. <br /> let is used for those variable where you need to
            change the it later.
          </div>{" "}
          But const is the type of variable which you have decided not to change
          it. But there are some core differences such as :
          <br />
          <strong>var has no block scope</strong>
          <br />
          consider the following code
          <br />
          <div className="imgstyle">
            <img src={letandvar} alt="let and var" />
          </div>
          It will return true because var will ignore the block scope and
          behaves as global apple. <br />
          Let't try for the loop scope:
          <div className="imgstyle">
            <img src={letandvar1} alt="let and var" />
          </div>
          we will get 10 because the scope will be global for the i.
          <br />
          <strong>"var" processed at start of function</strong>
          <br />
          Let try the following code: <br />
          <div className="imgstyle">
            <img src={letandvar2} alt="let and var" />
          </div>
          The outcome will be Hi Elon Musk, because the var are processed at the
          start of the function either it is placed or not at the start of the
          function.
          <br />
          <strong>hoisting</strong> is always important to remember, conside the
          following code:
          <div className="imgstyle">
            <img src={letandvar3} alt="let and var" />
          </div>
          It will also return the same rusult i.e. Hi Elon Musk becasue as we
          know the var are processed start of the function whether they are
          placed into code block or somewhere else.
          <br />
          <strong>conclusion:</strong> So, I think you have got a grasp of
          const, var and let and their core differences. let and const has block
          level scope and var has the function level scope. So, you have to be
          very carefull if you are using var, because it will give you
          unpredictable results.
          <p className="subhead h3">
            <strong>2. Arrow function: </strong>
            <br />
          </p>
          Functions are the heart of Javascript, or in other words it is the
          cream of Javascript. Arrow function are new type of functions that
          solves some problem found in the normal type of the function.
          <br /> To define a normal type of function we use something like
          following approach:
          <div className="imgstyle">
            <img src={normalfunction} alt="let and var" />
          </div>
          But the arrow functions are a bit different:
          <div className="imgstyle">
            <img src={arrowfunction} alt="let and var" />
          </div>
          <strong>So, why we need arrow function?</strong>
          <br />
          Javascript is a language where we need to write a function and execute
          it somewhere else, right? So the point is that if we pass the fucntion
          to somewhere else then we need to maintain the context to get the
          appropriate results. But it is nightmare for we the developers to
          maintian the context. This is where the arrow function that solves
          problem and makes our lives happier. <br /> Arrow function has the 5
          advantages over normal functions:{" "}
          <ul className="circle">
            <li>Arrow Functions are shorthand to write the functions</li>
            <li>Arrow functions dont have their "this" keyword</li>
            <li>It can't be called with new keyword</li>
            <li>Arrow function have no arguments</li>
            <li>Arrow functions dont have super</li>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default FullArticle;
