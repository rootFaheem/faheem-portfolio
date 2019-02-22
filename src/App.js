import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar/Navbar";
import Landing from "./components/Layout/MainContent/Landing/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <h1>i am faheem</h1>
        </div>
        <Landing />
      </div>
    );
  }
}

export default App;
