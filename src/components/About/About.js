import React from "react";
import "./About.css";
const about = () => {
  return (
    <div className="container About ">
      <p className="h1">ABOUT </p>
      <hr />
      <hr className="star mb-5" />
      <div className="container-fluid">
        <div className="row">
          <div className="text-center col-md-4">
            <div className="text-justify bg-light">
              <p className="text-center h3" id="top">
                {" "}
                about me
              </p>
              <hr />
              <div id="paddings">
                I'm a Full Stack web Developer based in New Delhi, India. I
                enjoy making some cool Full Stack web App. I do always see
                everything as problem to be solved. When I am not coding either
                i will be watching The BIg Bang Theory or Mr. Robot.
              </div>
            </div>
          </div>
          <div className="text-center col-md-4">
            <div className="text-justify bg-success ">
              <p className="text-center h3" id="top">
                {" "}
                Education
              </p>
              <hr />
              <div id="paddings">
                Widget 2 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Itaque aliquam id debitis repellendus, tenetur dignissimos
                dolore aliquid expedita magnam modi officia nam doloribus
                repudiandae, accusamus ex assumenda.
              </div>
            </div>
          </div>
          <div className="text-center col-md-4">
            <div className="text-justify bg-danger">
              <p className="text-center h3" id="top">
                {" "}
                Skills
              </p>
              <hr />
              <div id="paddings">
                Widget 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Officiis at nam facilis omnis error expedita praesentium
                blanditiis ipsa sunt sed voluptatem quisquam iusto ab veniam
                sint, quo odio doloribus vel?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
