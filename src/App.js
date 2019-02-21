import React, { Component } from "react";
import Landing from "./components/Layout/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing>
          <div>
            <h1>I am Faheem Ahmad</h1>
            <h1>I am a Full Stack Developer</h1>
          </div>
        </Landing>
      </div>
    );
  }
}

export default App;
