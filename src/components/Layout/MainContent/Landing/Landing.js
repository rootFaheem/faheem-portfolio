import React from "react";
import BackgroundImage from "../../../../assets/showcase.jpg";
import "./Landing.css";

const landing = () => {
  return (
    <div>
      <img src={BackgroundImage} id="bg" alt="" />

      <div className="text-center bg-text">
        <p className="h1 ">Hi, I am Faheem Ahmad </p>
        <hr />
        <p className="h2">Full Stack Web Developer</p>
      </div>
    </div>
  );
};

export default landing;
