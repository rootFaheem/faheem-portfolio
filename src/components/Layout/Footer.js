import React from "react";
import "../../App.css";

const footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Jamia Nagar, Okhla
                <br />
                New Delhi-110025{" "}
              </p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Reach me on Web</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="https://github.com/FaheemTech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-fw fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="https://twitter.com/rootfaheem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-fw fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-fw fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">Contact Me</h4>
              <p className="lead mb-0">
                Mobile No: +91-8929997976
                <br />
                email:{" "}
                <a
                  href="mailto:faheemtech1@gmail.com?Subject=Hello%20again"
                  target="_top"
                >
                  Send Mail
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; {new Date().getFullYear()} faheem </small>
        </div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed ">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </div>
  );
};

export default footer;
