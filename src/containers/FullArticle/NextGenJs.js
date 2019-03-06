import React, { Component } from "react";

import "./NextGenJs.css";
import nextgenjs from "../../assets/Article/nextgenjs.jpeg";
import Footer from "../../components/Layout/Footer/Footer";

class NextGenJs extends Component {
  render() {
    return (
      <div>
        <div className="container FullArticle">
          <div className="row">
            <p className="h3 font-weight-bold articlehead">
              What the heck is Next-Generation Javascript?
            </p>
          </div>
          <hr />
          <div>
            <img className="responsiveImg" src={nextgenjs} alt="article" />
          </div>
          <div>
            <p className="articleText">
              <strong>
                {" "}
                First thing first, Please dont judge me on examples taken in
                this article :) THANKS
              </strong>
              <br />
              <br />
              As we know Javascript is scripting language for web-pages. Like
              other languages e.g. Java, PHP, Python etc. are evolving and keep
              adding new features, fixing issues from previous experience.
              Javascript is also doing the same. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;By the way ECMAScript is standard that is
              used to define the Javascript fetures. ECMAScript 5.1 was
              introduced in 2012. And the 6th major upgrade was done in 2015 i.e
              ECMAScript6. And after that ECMAScript releases their upgrade on
              yearly basis. so in 2018 the upgrade was done and in this article
              we will be talking about the latest features added.
            </p>
            <p className="subhead h4">
              <strong>1. let and const: </strong>
              <br />
            </p>
            Two new keywords has been introduced that are{" "}
            <strong className="highlightkeywords">let </strong>
            and <strong className="highlightkeywords">const</strong>.
            <div className="highlight">
              {" "}
              <strong className="highlightkeywords">let </strong>
              and <strong className="highlightkeywords">const</strong> is a way
              to define a variable in javascript.{" "}
              <strong className="highlightkeywords">let </strong> behaves the
              same as the <strong className="highlightkeywords">var</strong>.{" "}
              <strong className="highlightkeywords">const</strong> is like
              constant that will never change. <br />{" "}
              <strong className="highlightkeywords">let </strong> is used for
              those variable where you need to change the it later.
            </div>{" "}
            But <strong className="highlightkeywords">const</strong> is the type
            of variable which you have decided not to change it. But there are
            some core differences such as:
            <br />
            <br />
            <p className="weight">"var" has no block scope</p>
            consider the following code:
            <iframe
              className="fiddlestyle"
              title="var"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/64ura23q/62/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            It will return "true" because{" "}
            <strong className="highlightkeywords">var</strong> will ignore the
            block scope and behaves as global apple. <br />
            Let's try for the loop scope:
            <iframe
              className="fiddlestyle"
              title="var"
              width="100%"
              height="200"
              src="//jsfiddle.net/FaheemTech/64ura23q/74/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            we will get "10" because the scope will be global for the{" "}
            <strong className="highlightkeywords">i</strong>.
            <br />
            <br />
            <p className="weight">"var" processed at start of the function</p>
            Let try the following code: <br />
            <iframe
              className="fiddlestyle"
              title="var "
              width="100%"
              height="240"
              src="//jsfiddle.net/FaheemTech/64ura23q/119/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            The outcome will be "Hi Elon Musk", because the{" "}
            <strong className="highlightkeywords">var</strong> are processed at
            the start of the function either it is placed or not at the start of
            the function.
            <br />
            This behaviour is called{" "}
            <strong className="highlightkeywords">hoisting</strong> It means
            raising at top. All the variables are{" "}
            <strong className="highlightkeywords">hoisted</strong> at the top of
            the function when function starts it's execution. Consider the
            following code:
            <iframe
              className="fiddlestyle"
              title="var "
              width="100%"
              height="280"
              src="//jsfiddle.net/FaheemTech/64ura23q/117/embedded/js,html,css,result/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            It will also return the same rusult i.e. "Hi Elon Musk" becasue as
            we know the <strong className="highlightkeywords">var</strong> are
            processed at start of the function whether they are placed into code
            block or somewhere else.
            <br />
            <br />
            <strong>Conclusion:</strong> I think you have got a grasp of
            <strong className="highlightkeywords">const</strong>,{" "}
            <strong className="highlightkeywords">var</strong> and{" "}
            <strong className="highlightkeywords">let </strong> and their core
            differences. <strong className="highlightkeywords">let </strong> and{" "}
            <strong className="highlightkeywords">const</strong> has block level
            scope and <strong className="highlightkeywords">var</strong> has the
            function level scope. So, you have to be very carefull if you are
            using <strong className="highlightkeywords">var</strong>, because it
            will give you unpredictable results.
            <p className="subhead h4">
              <strong>2. Arrow function: </strong>
              <br />
            </p>
            Functions are the heart of Javascript, or in other words it is the
            cream of Javascript. Arrow function are new type of functions that
            solves some problem found in the normal type of the function.
            <br /> To define a normal function we use following approach:
            <iframe
              className="fiddlestyle"
              title="normal function"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/64ura23q/115/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            But the arrow functions are a bit different and we use following
            approach:
            <iframe
              className="fiddlestyle"
              title="arrow function"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/64ura23q/113/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <strong className="weight">
              So, why do we need arrow function? Can we not just use normal
              functions?
            </strong>
            <div className="highlight">
              Javascript is a language where we need to write a function and
              execute it somewhere else, right? So the point is that if we pass
              the fucntion to somewhere else then we need to maintain the
              context to get the appropriate results. But it is nightmare for we
              the developers to maintian the context. This is where the arrow
              function that solves problem and makes our lives happier.
            </div>
            <strong>
              Arrow function has the 5 advantages over normal functions:
            </strong>{" "}
            <ul className="circle">
              <li>Arrow Functions are shorthand to write the functions</li>
              <li>
                Arrow functions dont have their{" "}
                <strong className="highlightkeywords">this</strong> keyword
              </li>
              <li>
                It can't be called with{" "}
                <strong className="highlightkeywords">new</strong> keyword
              </li>
              <li>
                Arrow function have no{" "}
                <strong className="highlightkeywords">arguments</strong>
              </li>
              <li>
                Arrow functions dont have{" "}
                <strong className="highlightkeywords">super</strong>
              </li>
            </ul>
            <strong>Let's do them by practical examples:</strong> In the above
            list the first point is arrow functions are shorthand to write
            funcions as you can see above pictures.
            <br /> Second point is that arrow function don't have their{" "}
            <strong className="highlightkeywords">this</strong>
            keyword. So, by using arrow function there is no issues with the
            <strong className="highlightkeywords">this</strong> keyword. As we
            know there are lot of cases where we neen to maintain the context of
            <strong className="highlightkeywords">this</strong> of{" "}
            <strong className="highlightkeywords">class</strong>, method,
            function. <br />
            <br />
            <strong className="weight">
              What happens if we try to access{" "}
              <strong className="highlightkeywords">this</strong> in arrow
              function?
            </strong>
            <div className="highlight">
              It will be taken from outside. In other word that context of this
              will be outer elements like class, method, function etc.
            </div>
            Let's see this in following example:
            <iframe
              className="fiddlestyle"
              title="arrow function"
              width="100%"
              height="280"
              src="//jsfiddle.net/FaheemTech/64ura23q/142/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            As we can see the context has taken from outside from the arrow
            function. If we run the same code without the arrow function then it
            will show an error. <br /> Let's move on to next point that is arrow
            funcions can't be called with{" "}
            <strong className="highlightkeywords">new</strong> keyword. It is so
            because they don't have their own{" "}
            <strong className="highlightkeywords">this</strong> keyword, as
            result they can't be used as{" "}
            <strong className="highlightkeywords">constructor</strong>. And we
            know constructors requires{" "}
            <strong className="highlightkeywords">new</strong> to call it. So
            they can't be called with{" "}
            <strong className="highlightkeywords">new</strong>.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Next point is that Arrow Functions don't
            have any arguments. It means it is very useful in cases where we
            want to send the current{" "}
            <strong className="highlightkeywords">this</strong> and{" "}
            <strong className="highlightkeywords">argumnets</strong>. Because it
            will maintain the same context and state (data passed). Let's
            consider the following example:
            <iframe
              className="fiddlestyle"
              title="arrow function"
              width="100%"
              height="290"
              src="//jsfiddle.net/FaheemTech/64ura23q/156/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            As we can see in{" "}
            <strong className="highlightkeywords">changedCEO()</strong> , we are
            getting a function and it will returns the outcome after 3
            miliseconds. It means it is maintaing the context of current
            <strong className="highlightkeywords">this</strong>.
            <br />
            <br />
            Last point is arrow functions dont have their{" "}
            <strong className="highlightkeywords">super</strong>. Consider the
            following example:
            <iframe
              className="fiddlestyle"
              title="arrow parent call"
              width="100%"
              height="380"
              src="//jsfiddle.net/FaheemTech/64ura23q/171/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            As we can see that in{" "}
            <strong className="highlightkeywords">Elon</strong> class we are
            calling <strong className="highlightkeywords">super</strong>, and
            delay is 2 miliseconds. So it will take the outer{" "}
            <strong className="highlightkeywords">super</strong> to call the
            <strong className="highlightkeywords">teslaCEO()</strong> method
            from the parent class.
            <p className="subhead h4">
              <strong>3. Exports and Imports</strong>
              <br />
            </p>
            Usually we write a simple program in a single file. But if we need
            to build a complete web app, we need to break it into simple and
            smaller files because if we write all the code in one single file,
            it will be almost impossible to maintain the workflow of other
            Software Engineering practices. So, to make it simple we do break it
            into small files according to their roles. Where each file is called
            a <strong className="highlightkeywords">Module</strong>.
            <br />
            <div className="highlight">
              {" "}
              Note: By default every file or Module runs seperately on their
              own.{" "}
            </div>
            So, there should be some connection present in order to work as an
            application. This problem is solved by the concept of{" "}
            <strong className="highlightkeywords">Export</strong> and
            <strong className="highlightkeywords">Import</strong>. <br />{" "}
            <div className="highlight">
              {" "}
              <strong className="highlightkeywords">Export</strong> keyword is
              used to Export the code such as varibales, functions, classes .
              <br /> <strong className="highlightkeywords">Import</strong>{" "}
              keyword is used to import and use the exported code from other
              file.
            </div>
            <br /> <strong>Let's consider the following example:</strong> There
            are three files and the aim is to import the data from two file to
            in third file. <br />
            <br />
            <strong> Tesla.js</strong>
            &nbsp; file looks like this:
            <iframe
              className="fiddlestyle"
              title="Tesla file"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/10/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <strong> SpaceX.js</strong>
            &nbsp; file looks like this:
            <iframe
              className="fiddlestyle"
              title="SpaceX file"
              width="100%"
              height="170"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/17/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <strong> Elon.js</strong>
            &nbsp; file looks like this:
            <iframe
              className="fiddlestyle"
              title="Elon File"
              width="100%"
              height="240"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/34/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            <div className="highlight">
              <strong>Explaination:</strong> In Tesla.js we have a Javascript
              object i.e name and we are using the default type of export. It
              means if we normally import the file in some other file then we
              will get the default export. <br />
              &nbsp;&nbsp;&nbsp;&nbsp; In SpaceX.js we are exporting one
              function and a variable but both are not a default export so we
              have to import them by calling their names in the curly braces, as
              done in the Elon.js. One thing more that if you have multiple
              exports in some file and you want to import all of them in one go.
              so you can do that as commented out in the Elon.js file.
            </div>
            <p className="subhead h4">
              <strong>4. Spread and Rest operator (...)</strong>
              <br />
            </p>
            <div className="highlight">
              Spread is used to expand an iterable object into the list of
              arguments.
            </div>{" "}
            <strong>For example:</strong> suppose you want to copy all elements
            from one array to another array. There are lot of ways to this. But,
            <strong className="highlightkeywords">spread</strong> is very handy
            way to do this. see below code:
            <iframe
              className="fiddlestyle"
              title="Spread operator"
              width="100%"
              height="400"
              src="//jsfiddle.net/FaheemTech/1zoys6j7/55/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            So as you can see in the above code, we have{" "}
            <strong className="highlightkeywords">oldArray</strong> that has
            three elements and we want to merge it into the{" "}
            <strong className="highlightkeywords">newArray</strong> that has
            already two elements. And if we see the result then we will get
            <strong className="highlightkeywords">1,2,3,4,5</strong>.
            <br /> Similarly the property from{" "}
            <strong className="highlightkeywords">elon</strong>
            object copied to{" "}
            <strong className="highlightkeywords">newElon</strong> object.
            <div className="highlight">
              Rest is used to merge a list of function arguments into an array.
              In other words we can say a function can be called with any number
              of arguments.
            </div>{" "}
            Consider the following example:
            <iframe
              className="fiddlestyle"
              title="Rest operator "
              width="100%"
              height="280"
              src="//jsfiddle.net/FaheemTech/64ura23q/9/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            In the above code we have{" "}
            <strong className="highlightkeywords">showName()</strong> that
            accepts the first, last name and we have used Rest operator to get
            any new argument, technically it can accept any number of arguments.
            <div className="highlight">
              Spread is used in most cases. Rest is rarely used.
            </div>
            <p className="subhead h4">
              <strong>5. Destructuring </strong>
              <br />
            </p>
            Two most data strucures used in Javascript are Objects and Arrays.
            Destructuring is used to extract array elements or object properties
            and then store them in variables. Goal of doing this is, so we can
            work with individual elements rather than whole array or object.
            <br />
            Let's see in the following example:
            <iframe
              className="fiddlestyle"
              title="Array & object destructuring"
              width="100%"
              height="400"
              src="//jsfiddle.net/FaheemTech/64ura23q/57/embedded/js,html,css/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            />
            In the <strong className="highlightkeywords">elon</strong> array we
            have two elements and we are destructuring them into{" "}
            <strong className="highlightkeywords">firstName</strong> and{" "}
            <strong className="highlightkeywords">lastName</strong>. <br /> In
            the <strong className="highlightkeywords">companyNames</strong>{" "}
            object we have three names and we are extracting them into one
            single elements i.e. each property will reperesent one separate
            value.
            <br />
            <br />
            <div>
              <strong className="h5 font-weight-bold"> Conclusion: </strong>I
              hope this article helps. Feel free share to anyone who is needy.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NextGenJs;
