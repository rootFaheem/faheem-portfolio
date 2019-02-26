import React from "react";

import Article from "../Blog/Article/Article";
import "./Blog.css";
const blog = () => {
  return (
    <div className="Blog">
      <div>
        <p className=" text-center h1">My Blog! </p>
        <hr />
      </div>
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default blog;
