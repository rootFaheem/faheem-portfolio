import React from "react";

import "./Portfolio.css";

// import BurgerBuilder from "../../assets/porfolio/BurgerBuilder.png";
// import NodeShop from "../../assets/porfolio/nodeshop.png";
// import WSN from "../../assets/porfolio/wsn.png";
import Footer from "../Layout/Footer/Footer";

const portfolio = () => {
  return (
    <div>
      <div className="Portfolio">
        <div className="container">
          <div>
            <p className="text-center h5">
              Here are my recent work.{" "}
              <strong>
                {" "}
                want to discuss an idea or want to do a project togather lets
                meet, i will pay the bills for coffee ;)
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default portfolio;
