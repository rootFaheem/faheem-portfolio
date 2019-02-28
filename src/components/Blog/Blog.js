import React from "react";

import Articles from "../Blog/Articles/Articles";
import "./Blog.css";
import Footer from "../Layout/Footer/Footer";

const blog = () => {
  return (
    <div>
      <div className="Blog">
        <Articles />
      </div>
      <Footer />
    </div>
  );
};

export default blog;
