import React from "react";
import BackgroundImage from "../../../../assets/showcase.jpg";
import "./Landing.css";

const landing = () => {
  return (
    <div>
      <img src={BackgroundImage} id="bg" alt="" />

      <div className="text-center bg-text">
        <p>Hi, I am Faheem Ahmad</p>
        <hr />
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  );
};

export default landing;
