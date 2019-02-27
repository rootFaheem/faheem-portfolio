import React from "react";

import "./Portfolio.css";

import BurgerBuilder from "../../assets/porfolio/BurgerBuilder.png";
import NodeShop from "../../assets/porfolio/nodeshop.png";
import WSN from "../../assets/porfolio/wsn.png";

const portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="container">
        <p className="text-center h5">
          Here are my recent work.{" "}
          <strong>
            {" "}
            want to discuss an idea or want to do a project togather lets meet,
            i will pay the bills for coffee ;)
          </strong>
          <a
            href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
            target="_top"
            className="mail text-info"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <span className="badge badge-pill badge-info">email me</span>
          </a>
        </p>
        <div className="row topMargin">
          <div className="col-sm-4" id="bottom">
            <div className="card" id="circular">
              <div>
                {" "}
                <img
                  className="card-img-top"
                  src={BurgerBuilder}
                  alt="Burger Builder"
                />
              </div>

              <div className="card-body bg-light" id="pad">
                <h5 className="card-title">Burger Builder</h5>
                <p className="card-text">
                  Burger Builder is an online shop where you can build,
                  customize your burger as per your need. Also Sign In and
                  Order.
                </p>
                <a
                  href="https://react-my-burger-ab967.firebaseapp.com/"
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit site
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4" id="bottom">
            <div className="card" id="circular">
              <div>
                {" "}
                <img className="card-img-top" src={WSN} alt="WSN" />
              </div>

              <div className="card-body bg-light" id="pad">
                <h5 className="card-title">An ECLA for WSN</h5>
                <p className="card-text">
                  An-Enhanced-Certificate-less-Algorithm-for-Wireless-Sensor-Network
                </p>
                <a
                  href="https://github.com/FaheemTech/An-Enhanced-Certificate-less-Algorithm-for-Wireless-Sensor-Network-React"
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit site
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4" id="bottom">
            <div className="card" id="circular">
              <div>
                {" "}
                <img className="card-img-top" src={NodeShop} alt="Node Shop" />
              </div>

              <div className="card-body bg-light" id="pad">
                <h5 className="card-title">Node shop</h5>
                <p className="card-text">
                  node-shop is an online store where you can buy things, add to
                  cart, make payments.
                </p>
                <a
                  href="https://github.com/FaheemTech/node-shop"
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default portfolio;
