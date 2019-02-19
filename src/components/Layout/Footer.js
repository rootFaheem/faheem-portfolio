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
                    href="#/"
                  >
                    <i className="fab fa-fw fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#/"
                  >
                    <i className="fab fa-fw fa-google-plus-g" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#/"
                  >
                    <i className="fab fa-fw fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#/"
                  >
                    <i className="fab fa-fw fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#/"
                  >
                    <i className="fab fa-fw fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, open source Bootstrap theme created
                by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2019</small>
        </div>
      </div>

      {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) --> */}
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
