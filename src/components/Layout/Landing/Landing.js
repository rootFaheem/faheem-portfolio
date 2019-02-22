import React from "react";
import Navbar from "./Navbar";

const landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div>
          <Navbar />
          <div className="brand">
            <a href="/">
              <div className="brand-name">
                <p>faheem</p>
              </div>
            </a>
          </div>

          <div className="Info">
            <h1>I am Faheem Ahmad</h1>
            <h1>I am a Full Stack Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
