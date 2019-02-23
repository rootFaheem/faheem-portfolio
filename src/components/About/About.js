import React from "react";
import "./About.css";
const about = () => {
  return (
    <div className="container">
      <div className="About ">
        <p className="h1">ABOUT </p>
        <hr />
        <hr />
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-md-4">
              <div className="text-justify bg-light">
                <p className="text-center h3" id="top">
                  {" "}
                  About me
                </p>
                <hr />
                <div id="paddings">
                  I'm a Full Stack web Developer based in New Delhi, India. I
                  enjoy making some cool Full Stack web App. I do always see
                  everything as problem to be solved. When I am not coding then
                  you will find me on twitter, watching The Big Bang Theory or
                  Mr. Robot. I do use twitter a lot. Twitter has always been my
                  source of my daily news. Why i love Twitter because of its
                  authenticity. I things i always fail in is hit the zym daily.
                </div>
              </div>
            </div>
            <div className="text-center col-md-4">
              <div className="text-justify bg-light ">
                <p className="text-center h3" id="top">
                  {" "}
                  Education
                </p>
                <hr />
                <div id="paddings">
                  I have completed my High School from Khair Technical Hr.
                  Secondary School with 83% of marks. <br /> Then I have
                  completed Diploma in Computer Engineering from Jamia Millia
                  Islamia with 76% of marks <br /> After that i have joined
                  GGSIPU for my Graduation. So, from GGSIPU I have completed my
                  Bachelor of Technology (B.Tech) in Computer Science and
                  Engineering with 73%of marks.
                </div>
              </div>
            </div>
            <div className="text-center col-md-4">
              <div className="text-justify bg-light">
                <p className="text-center h3" id="top">
                  {" "}
                  Interests
                </p>
                <hr />
                <div id="paddings">
                  I enjoy learing about latest technolgy stacks and everything
                  that can solve my problem. I mostly work with MERN stack and
                  AWS, so always love to hear about them. <br /> Some other
                  stuff i like is <strong>Elon Musk vision</strong>, Blockchain,
                  InfoSec. There are lot of entertainment stuff i watch such as
                  The Big Bang Theory, Mr. Robot, Silicon Valley, Iron Man
                  series. And i do resarch about random things whatever comes in
                  my mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skills">
        <p className="h1">SKILLS </p>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis
          deleniti quae, harum blanditiis aperiam. Excepturi consectetur
          laboriosam sint iste dolore dicta officiis, nam animi nihil, sit quos
          sapiente! Minus.
        </p>
      </div>
    </div>
  );
};

export default about;
