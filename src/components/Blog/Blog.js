import React from "react";
// import { Route, Link } from "react-router-dom";

// import FullArticle from "../../containers/FullArticle/FullArticle";

import Articles from "../Blog/Articles/Articles";
import "./Blog.css";
const blog = () => {
  return (
    <div>
      <div className="Blog">
        <Articles />
        <Articles />
        <Articles />
      </div>
    </div>
  );
};

export default blog;
