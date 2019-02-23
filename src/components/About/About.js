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
                I have completed my High School from Khair Technical Hr.
                Secondary School with 83% of marks. <br /> Then I have completed
                Diploma in Computer Engineering from Jamia Millia Islamia with
                76% of marks <br /> After that i have joined GGSIPU for my
                Graduation. So, from GGSIPU I have completed my Bachelor of
                Technology (B.Tech) in Computer Science and Engineering with
                73%of marks.
              </div>
            </div>
          </div>
          <div className="text-center col-md-4">
            <div className="text-justify bg-danger">
              <p className="text-center h3" id="top">
                {" "}
                Interests
              </p>
              <hr />
              <div id="paddings">
                I enjoy learing about latest technolgy stacks and everything
                that can solve my problem. I mostly work with MERN stack and
                AWS, so always love to hear about them. <br /> Some other stuff
                i like is <strong>Elon Musk vision</strong>, Blockchain,
                InfoSec. There are lot of
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
