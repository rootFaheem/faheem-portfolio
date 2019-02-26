import React from "react";
// import { Route, Link } from "react-router-dom";

// import FullArticle from "../../containers/FullArticle/FullArticle";

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
        {/* <Link to="/blog/react-introduction" exact> */}
        <Article />
        {/* </Link> */}
      </div>
      {/* <div>
        <Route
          path="/blog/react-introduction"
          exact
          render={() => <h1>Hi there</h1>}
        /> */}
      {/* component={FullArticle} */}
      {/* </div> */}
    </div>
  );
};

export default blog;
