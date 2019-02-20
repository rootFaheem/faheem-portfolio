import React from "react";

import profile from "../../img/faheem.png";
import cabin from "../../img/portfolio/cabin.png";
import cake from "../../img/portfolio/cake.png";
import circus from "../../img/portfolio/circus.png";
import safe from "../../img/portfolio/safe.png";
import submarine from "../../img/portfolio/submarine.png";
import game from "../../img/portfolio/safe.png";

const landing = () => {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <img
            className="img-fluid mb-5 d-block mx-auto"
            src={profile}
            alt="profile_image"
          />
          <h1 className="text-uppercase mb-0">Faheem Ahmad</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0">
            Full Stack Web Developer - Amazon Web Services expert
          </h2>
        </div>
      </header>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={cabin} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-2"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={cake} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-3"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={circus} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-4"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={game} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-5"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={safe} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-6"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={submarine} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase text-white">About</h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">
                I am faheem Ahmad. I do mess with Computers. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Numquam, porro eius sit
                dolorum necessitatibus eveniet magnam praesentium voluptas
                facilis ratione architecto saepe inventore ex, ipsum pariatur et
                laborum veritatis magni.
              </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">
                I have completed my 10th with 82% of marks from Khair Technical
                Hr. Secondary School in 2012. After that i have joined Jamia
                Millia Islamia in New Delhi. And from there i have completed
                Diploma in Computer Engineering in 2015 with 76% of marks. And
                then i have joined GGSIP University in New Delhi and from there
                i have completed Bachelor of Technology in 2018 with 73% of
                marks.
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="#/">
              <i className="fas fa-download mr-2" />
              Download Now!
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form name="sentMessage" id="contactForm" noValidate="noValidate">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <br />
                <div id="success" />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-xl"
                    id="sendMessageButton"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default landing;
