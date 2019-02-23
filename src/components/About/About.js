import React from "react";
import "./About.css";
const about = () => {
  return (
    <div className="container  bg-dark About ">
      <h1>about faheem </h1>
      <hr />
      {/* <hr className="star mb-5" />
      <div className="row" id="#mycol0">
        <div className="col-sm-6">1 of 2</div>
        <div className="col-sm-6">2 of 2</div>
      </div> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6" id="mycol0">
            I am Faheem Ahmad. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt laboriosam tenetur ab libero nisi quae,
            sint voluptatum consectetur dolore repellendus. Cumque deleniti
            vitae porro veritatis molestiae inventore atque possimus unde!
          </div>
          <div className="col-sm-6" id="mycol1">
            .col-sm-4
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
