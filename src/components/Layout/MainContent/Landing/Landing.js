import React from "react";
import BackgroundImage from "../../../../assets/showcase.jpg";
import "./Landing.css";

const landing = () => {
  return (
    <div>
      <img src={BackgroundImage} id="bg" alt="" />

      <div className="Landing">
        <h1>Landing Page! </h1>
        <hr />
        <p>
          This is my landing page where i want to put some links the basic
          details{" "}
        </p>
      </div>
    </div>
  );
};

export default landing;
