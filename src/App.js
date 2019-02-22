import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
// import Landing from "./components/Layout/MainContent/Landing/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Landing /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
