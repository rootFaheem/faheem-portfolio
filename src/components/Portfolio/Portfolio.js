import React from "react";

import "./Portfolio.css";

import BurgerBuilder from "../../assets/porfolio/BurgerBuilder.png";
import BackMyItem from "../../assets/porfolio/backmyitem.png";
import NodeShop from "../../assets/porfolio/nodeshop.png";
import save4thpillar from "../../assets/porfolio/save4thpillar.png";
import FaheemProfile from "../../assets/porfolio/faheemprofile.png";
import WSN from "../../assets/porfolio/wsn.png";

import Footer from "../Layout/Footer/Footer";

const portfolio = () => {
  return (
    <div style={{ background: "#e6ecf0" }}>
      <div className="Portfolio">
        <div className="container">
          <div>
            <div style={{ marginTop: "50px", fontWeight: "900" }}>
              <p className="h2 text-center" style={{ fontWeight: "501" }}>
                {" "}
                PROJECTS
              </p>
              <hr
                className="text-center"
                style={{
                  height: "1px",
                  width: "147px",
                  marginTop: "-12px",
                  border: "none",
                  color: "#333",
                  backgroundColor: "#333"
                }}
              />
            </div>
          </div>

          <div className="row no-gutters" style={{ marginTop: "80px" }}>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <div>
                <div>
                  <img
                    src={BurgerBuilder}
                    className="image"
                    alt="burger builder"
                  />
                </div>
                <div className="overlay">
                  <div className="imgtext">
                    <div>
                      <p className="Rbold">Burger Builder</p>
                      <p className="fontRaleway">React + Redux, Firebase</p>
                    </div>
                    <div>
                      <a
                        href="https://react-my-burger-ab967.firebaseapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn visitbutton" href="/">
                          {" "}
                          visit the website
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <div>
                <img src={BackMyItem} className="image" alt="BackMyItem" />
              </div>
              <div>
                <div className="overlay">
                  <div className="imgtext">
                    <div>
                      <p className="Rbold">BackMyItem</p>
                      <p className="fontRaleway">
                        HTML5, CSS3, Bootstrap, JQuery, Django, Google Map,
                        Auth, AWS
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://backmyitem.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn visitbutton" href="/">
                          {" "}
                          visit the website
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <img src={FaheemProfile} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p className="Rbold">Faheem Profile</p>
                    <p className="fontRaleway">
                      React, Bootstrap, Reactstrap, Google Font, Font Awesome
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://react-my-burger-ab967.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn visitbutton" href="/">
                        {" "}
                        visit the website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <img src={save4thpillar} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p className="Rbold">Save4thpillar</p>
                    <p className="fontRaleway">
                      MERN stack, Redux, Bootstrap, Reactstrap, JWT-Auth,
                      Passport, BcryptJs, Mongoose
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://github.com/FaheemTech/save4thpillar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn visitbutton" href="/">
                        {" "}
                        visit the website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <div>
                <div>
                  <img src={WSN} className="image" alt="burger builder" />
                </div>
                <div className="overlay">
                  <div className="imgtext">
                    <div>
                      <p className="Rbold">An ECA for WSN</p>
                      <p className="fontRaleway">MERN stack, MATLAB</p>
                    </div>
                    <div>
                      <a
                        href="https://github.com/FaheemTech/An-Enhanced-Certificate-less-Algorithm-for-Wireless-Sensor-Network-React"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn visitbutton" href="/">
                          {" "}
                          visit the website
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <img src={NodeShop} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p className="Rbold">NodeShop</p>
                    <p className="fontRaleway">NodeJs, Express, MongoDB, EJS</p>
                  </div>
                  <div>
                    <a
                      href="https://github.com/FaheemTech/node-shop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn visitbutton" href="/">
                        {" "}
                        visit the website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "200px", marginBottom: "200px" }}>
            <p className="text-center h4">
              {" "}
              want to discuss an idea? or do a project together?
              <br /> Let's meet, i will pay for coffee.
              <a
                href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                className="mail badge-lg badgeStyle badge-pill"
              >
                E-mail Me
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default portfolio;
