import React from "react";

import "./Portfolio.css";

import BurgerBuilder from "../../assets/porfolio/BurgerBuilder.png";
import NodeShop from "../../assets/porfolio/nodeshop.png";
import WSN from "../../assets/porfolio/wsn.png";
import Footer from "../Layout/Footer/Footer";

const portfolio = () => {
  return (
    <div>
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
                      <p className="fontRaleway">React+Redux</p>
                    </div>
                    <div>
                      <a href="/">
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
                <img src={NodeShop} className="image" alt="burger builder" />
              </div>
              <div>
                <div className="overlay">
                  <div className="imgtext">
                    <div>
                      <p className="Rbold">Node Shop</p>
                      <p className="fontRaleway">Node.js + Express</p>
                    </div>
                    <div>
                      <a href="/">
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
                <div>
                  <img src={WSN} className="image" alt="burger builder" />
                </div>
                <div className="overlay">
                  <div className="imgtext">
                    <div>
                      <p className="Rbold">An ECA for WSN</p>
                      <p className="fontRaleway">MERN stack</p>
                    </div>
                    <div>
                      <a href="/">
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
          </div>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 imgcontainer">
              <img src={WSN} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p className="Rbold">Burger Builder</p>
                    <p className="fontRaleway">React+Redux</p>
                  </div>
                  <div>
                    <a href="/">
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
              <img src={BurgerBuilder} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p className="Rbold">Burger Builder</p>
                    <p className="fontRaleway">React+Redux</p>
                  </div>
                  <div>
                    <a href="/">
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
              <img src={NodeShop} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p className="Rbold">Burger Builder</p>
                    <p className="fontRaleway">React+Redux</p>
                  </div>
                  <div>
                    <a href="/">
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

          <div style={{ marginTop: "100px" }}>
            <p className="text-center h5">
              <strong>
                {" "}
                want to discuss an idea? or do a project together?
                <br /> Let's meet, i will pay for coffee.
              </strong>
              <a
                href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                className="mail badge-lg badgeStyle badge-pill"
              >
                e-mail Me
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
