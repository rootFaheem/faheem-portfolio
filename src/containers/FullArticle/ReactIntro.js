import React, { Component } from "react";

import Footer from "../../components/Layout/Footer/Footer";
import "./ReactIntro.css";

class NextGenJs extends Component {
  render() {
    return (
      <div>
        <div className="container FullArticle">
          <div className="row">
            <p className="h3 font-weight-bold articlehead">
              An introduction to React, Build a React App from Scratch. And how
              to setup a dev environment for React.
            </p>
          </div>
          <hr />
          <div>
            <p className="h2 text-center" style={{ marginTop: "15%" }}>
              comming soon...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NextGenJs;
