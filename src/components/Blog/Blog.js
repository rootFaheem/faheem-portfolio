import React from "react";
// import { Route, Link } from "react-router-dom";

// import FullArticle from "../../containers/FullArticle/FullArticle";

import Articles from "../Blog/Articles/Articles";
import "./Blog.css";
const blog = () => {
  return (
    <div>
      <div className="Blog">
        <div>
          <p className=" text-center h1">My Blog! </p>
          <hr />
        </div>
        <Articles />
      </div>
    </div>
  );
};

export default blog;
