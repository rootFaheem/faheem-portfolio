import React from "react";
import { Link } from "react-router-dom";

const article = props => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img
            src={props.imgURL}
            alt="article showcase"
            className="imgShowcase"
          />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-auto">
              <Link to={props.link}>
                {" "}
                <p className="h3 heading">{props.heading}</p>{" "}
              </Link>
            </div>
          </div>
          <div
            className="row justify-content-between"
            style={{ color: "#999999" }}
          >
            <div className="col-auto">
              {" "}
              <small>in </small>{" "}
              <small style={{ color: "Green" }}>{props.category}</small>
            </div>
            <div className="col-auto">
              <small>{props.uploadedDate}</small>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              {" "}
              <p style={{ color: "#293347" }}>{props.subheading}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default article;
