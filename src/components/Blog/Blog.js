import React from "react";
import { Route, NavLink } from "react-router-dom";

import FullArticle from "../../containers/FullArticle/FullArticle";

import Article from "../Blog/Articles/Articles";
import "./Blog.css";
const blog = () => {
  return (
    <div>
      <div className="Blog">
        <div>
          <p className=" text-center h1">My Blog! </p>
          <hr />
        </div>
        <NavLink to="/blog/react-introduction" exact>
          <Article />
        </NavLink>
      </div>
      <div>
        <Route path="/blog/react-introduction" exact component={FullArticle} />
      </div>
    </div>
  );
};

export default blog;
