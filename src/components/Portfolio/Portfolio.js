import React from "react";

import "./Portfolio.css";

import BurgerBuilder from "../../assets/porfolio/BurgerBuilder.png";

const portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="container">
        <p className="text-center h1 head ">Portfolio</p>
        <hr />
        <p className="text-center h5">
          Here are my recent work.{" "}
          <strong>
            {" "}
            want to discuss an idea or want to do a project togather lets meet,
            i will pay the bills for coffee ;)
            <a
              href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
              target="_top"
              className="mail"
            >
              {" "}
              Email me
            </a>
          </strong>
        </p>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img
                className="card-img-top"
                src={BurgerBuilder}
                alt="Burger Builder"
              />
              <div className="card-body">
                <h5 className="card-title">Burger Builder</h5>
                <p className="card-text">
                  Burger Builder is an online shop where you can build and
                  customize your burger as per your need. You can Sign In and
                  then order it.
                </p>
                <a
                  href="https://react-my-burger-ab967.firebaseapp.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit site
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
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
