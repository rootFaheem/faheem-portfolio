import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div>
      <div className="stickyfooter">
        <footer className="page-footer font-small bg-dark pt-4">
          <div className="container">
            <div
              className="row flex-column-reverse flex-md-row justify-content-center align-items-center"
              id="spacing"
            >
              <div className="col-md-6 col-auto" id="spacingTop">
                <div className="text-center" id="footerlinks">
                  <a className="text-center" id="footerlinks" href="/">
                    <small>&copy; {new Date().getFullYear()} faheem</small>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-auto">
                <a
                  href="https://twitter.com/rootfaheem"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                  id="textdecoration"
                  role="button"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google"> </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  href="https://dribbble.com/faheemtech"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fa fa-dribbble" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default footer;
