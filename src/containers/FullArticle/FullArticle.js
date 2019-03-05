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
import arrowfunction1 from "../../assets/Article/arrowfunction1.png";
import arrowfunction2 from "../../assets/Article/arrowfunction2.png";
import arrowfunction3 from "../../assets/Article/arrowfunction3.png";

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
            <img className="responsiveImg" src={nextgenjs} alt="article" />
          </div>
          <div>
            <p className="articleText">
              First thing first, as we know Javascript is scripting language for
              web-pages.Like other languages e.g. Java, PHP, Python etc. are
              evolving and keep adding new features, fixing issues from previous
              experience. Javascript is also doing the same. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the way
              ECMAScript is standard that is used to define the Javascript
              fetures. ECMAScript 5.1 was introduced in 2012. And the 6th major
              upgrade was done in 2015 i.e ECMAScript6. And after this
              ECMAScript releases their upgrade on yearly basis. so in 2018 the
              upgrade was done and in this article we will be taling about the
              same. <br />
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
              behaves the same as the var. const is like constant that will
              never change. <br /> let is used for those variable where you need
              to change the it later.
            </div>{" "}
            But const is the type of variable which you have decided not to
            change it. But there are some core differences such as :
            <br />
            <strong>var has no block scope</strong>
            <br />
            consider the following code
            <br />
            <div className="imgCenter">
              <img className="imgstyle" src={letandvar} alt="let and var" />
            </div>
            It will return true because var will ignore the block scope and
            behaves as global apple. <br />
            Let't try for the loop scope:
            <div className="imgCenter">
              <img className="imgstyle" src={letandvar1} alt="let and var" />
            </div>
            we will get 10 because the scope will be global for the i.
            <br />
            <strong>"var" processed at start of function</strong>
            <br />
            Let try the following code: <br />
            <div className="imgCenter">
              <img className="imgstyle" src={letandvar2} alt="let and var" />
            </div>
            The outcome will be Hi Elon Musk, because the var are processed at
            the start of the function either it is placed or not at the start of
            the function.
            <br />
            <strong>hoisting</strong> is always important to remember, conside
            the following code:
            <div className="imgCenter">
              <img className="imgstyle" src={letandvar3} alt="let and var" />
            </div>
            It will also return the same rusult i.e. Hi Elon Musk becasue as we
            know the var are processed start of the function whether they are
            placed into code block or somewhere else.
            <br />
            <strong>conclusion:</strong> So, I think you have got a grasp of
            const, var and let and their core differences. let and const has
            block level scope and var has the function level scope. So, you have
            to be very carefull if you are using var, because it will give you
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
            <div className="imgCenter">
              <img
                className="imgstyle"
                src={normalfunction}
                alt="let and var"
              />
            </div>
            But the arrow functions are a bit different:
            <div className="imgCenter">
              <img className="imgstyle" src={arrowfunction} alt="let and var" />
            </div>
            <strong>So, why we need arrow function?</strong>
            <br />
            Javascript is a language where we need to write a function and
            execute it somewhere else, right? So the point is that if we pass
            the fucntion to somewhere else then we need to maintain the context
            to get the appropriate results. But it is nightmare for we the
            developers to maintian the context. This is where the arrow function
            that solves problem and makes our lives happier. <br /> Arrow
            function has the 5 advantages over normal functions:{" "}
            <ul className="circle">
              <li>Arrow Functions are shorthand to write the functions</li>
              <li>Arrow functions dont have their "this" keyword</li>
              <li>It can't be called with new keyword</li>
              <li>Arrow function have no arguments</li>
              <li>Arrow functions dont have super</li>
            </ul>
            Let's see this by practical examples: <br /> In the above list the
            first point is arrow functions are shorthand to write funcions as
            you can see above pictures.
            <br /> Second point is that arrow function dont have their this
            keyword. So, by using arrow function there is no issues with the
            this keyword. As we know there are lot of cases where we neen to
            maintain the context of this of class and method. <br />
            <div className="highlight">
              <strong>
                {" "}
                What happens if we try to access this in arrow function?
              </strong>{" "}
              It will be taken from outside. See the following example
            </div>
            <div className="imgCenter">
              <img
                className="imgstyle"
                src={arrowfunction1}
                alt="let and var"
              />
            </div>
            As we can see the context has taken from outside from the arrow
            function. If we run the same code without the arrow function then it
            will show an error. <br /> Lets move on to next point that is arrow
            funcions cant be called with new keyword. It is so because they dont
            have the this keyword, se they can't be used as constructor. So they
            cant be called with new.
            <br /> Next point is that Arrow Functions don't have any arguments.
            It means it is very useful in such cases where we want to send the
            current this and arguments. Because it will maintain the same
            context and state. Let's consider the following example
            <div className="imgCenter">
              <img
                className="imgstyle"
                src={arrowfunction2}
                alt="let and var"
              />
            </div>
            As we can see in changedCEO(), we are getting a function and it will
            returns the outcome after 3 miliseconds.
            <br />
            Last point is arrow functions dont have their super. Consider the
            following example:
            <div className="imgCenter">
              <img
                className="imgstyle"
                src={arrowfunction3}
                alt="let and var"
              />
            </div>
            As we can see that in Elon class we calling super, and delay is 2
            miliseconds. So it will take the outer super to call the teslaCEO()
            method from the parent class.
            <p className="subhead h3">
              <strong>3. Exports and Imports</strong>
              <br />
            </p>
            We write a simple program in a single file. But if we need to build
            a big web app, we need to break it into simple and smaller files.
            Where each file is called a Module.
            <br />
            <div className="highlight">
              {" "}
              <strong>
                {" "}
                Note: Every file or Module runs seperately on their own.{" "}
              </strong>
            </div>
            So, there should be some linking done because our modules must be
            connected in order to work as an application. For this linking the
            concept of Export and Import introduced. <br />{" "}
            <div className="highlight">
              {" "}
              "export" keyword is used to Export the code such as varibales,
              functions, classes .<br /> "import" keyword is used to import and
              use the exported code from other file.
            </div>
            <br /> Let's consider the following:
            <br />
            <br />
            <strong>
              {" "}
              <u>Tesla.js</u>
            </strong>
            &nbsp; file looks like this: <br />
            <br />
            <iframe
              title="Tesla file"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/10/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <strong>
              {" "}
              <u>SpaceX.js</u>
            </strong>
            &nbsp; file looks like this: <br />
            <br />
            <iframe
              title="SpaceX file"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/17/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <strong>
              {" "}
              <u>Elon.js</u>
            </strong>
            &nbsp; file looks like this: <br />
            <br />
            <iframe
              title="Elon File"
              width="100%"
              height="240"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/34/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <strong>Explaination:</strong> So, there are three files Tesla.js,
            SpaceX.js and Elon.js. In Tesla.js we have a Javascript object i.e
            name and we are using the default type of export. It means if we
            import the file in some other file then we will get the default
            export. <br />
            &nbsp;&nbsp;&nbsp;&nbsp; In SpaceX.js we are exporting one function
            and a variable but both are not a default export so we have to
            import them by calling their names in the curly braces, as done in
            the Elon.js. One thing more that if you have multiple exports in
            some file and you want to import all of them in one go. so you can
            do that as comment out in the Elon.js file.{" "}
            <p className="subhead h3">
              <strong>4. Spread and Rest operator (...)</strong>
              <br />
            </p>
            <div className="highlight">
              Spread is used to split up array elements or object properties.
            </div>{" "}
            For example: suppose you want to copy all elements from one array to
            another array. So, spread is very handy way to do this. see below
            code:
            <iframe
              title="Spread operator"
              width="100%"
              height="400"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/55/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            So as you can see in the above code, we have oldArray that has three
            elements and we want to merge it into the newArray that has already
            two elements. And if we see the result then we will get 1,2,3,4,5.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; Similarly the property from object
            elon copied to newElon.
            <div className="highlight">
              Rest is used to merge a list of function arguments into an array.
              In other words we can say{" "}
              <strong>
                a function can be called with any number of arguments.
              </strong>
            </div>{" "}
            <iframe
              title="Rest operator "
              width="100%"
              height="280"
              src="//jsfiddle.net/FaheemTech/64ura23q/9/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            As we can see the above code we have showName() that accepts the
            first, last name and we have used Rest operator, technically it can
            accept any number of arguments.
            <p className="subhead h3">
              <strong>5. Destructuring </strong>
              <br />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FullArticle;
