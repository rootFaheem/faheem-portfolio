import React from "react";
import "./About.css";
const about = () => {
  return (
    <div className="container">
      <div className="About">
        <p className="h2 head">ABOUT </p>
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-md-4" id="bottom">
              <div className="text-justify bg-light">
                <p className="text-center h4 " id="top">
                  {" "}
                  About me
                </p>
                <hr />
                <div id="paddings">
                  I'm a Full Stack web Developer based in New Delhi, India. I
                  enjoy making some cool Full Stack web Apps. I do always see
                  everything as problem to be solved. When I am not coding then
                  you will find me on twitter, watching The Big Bang Theory or
                  Mr. Robot. I do use twitter a lot. Twitter has always been my
                  source of my daily news. Why i love Twitter because of its
                  authenticity. I things i always fail in is hit the zym daily.
                </div>
              </div>
            </div>
            <div className="text-center col-md-4" id="bottom">
              <div className="text-justify bg-light ">
                <p className="text-center h4" id="top">
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
                  Engineering with 73% of marks.
                </div>
              </div>
            </div>
            <div className="text-center col-md-4" id="bottom">
              <div className="text-justify bg-light">
                <p className="text-center h4" id="top">
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
        <p className="h2 head" id="top">
          SKILLS{" "}
        </p>
        <hr />
        <p>
          Skills set is what you are recognised for. Skills and tools i have
          recently worked or currently working on.
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-md-4" id="bottom">
              <div className="text-center bg-light">
                <p className="text-center h4" id="top">
                  {" "}
                  Front-end Developer
                </p>
                <hr />
                <div id="paddings">
                  I try to build things from start. My strategy is simple but
                  powerful i.e. try to keep things simple, built them by using
                  the best and latest tech stack.
                </div>

                <p className="text-center h5 TopColor" id="top">
                  Languages I speak
                </p>
                <div id="paddings">
                  HTML/HTML5, CSS/CSS3, Javascript, NextGen JS, JQuery,
                  Bootstrap, React, Redux, Git
                </div>
                <p className="text-center h5 TopColor" id="top">
                  Dev Tools:
                </p>
                <div id="paddings">
                  <p>
                    VS Code <br />
                    Sublime <br />
                    Codepen <br />
                    npm <br />
                    Chrome Dev Tools <br />
                    React DevTool <br />
                    Redux DevTools <br />
                    Terminal (iTerm & Hyper) <br />
                    Github <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center col-md-4" id="bottom">
              <div className="text-center bg-light">
                <p className="text-center h4" id="top">
                  {" "}
                  Back-end Developer
                </p>
                <hr />
                <div id="paddings">
                  Back-end has been always interesting to me because writing
                  server side code is always a challenging task to do. One
                  things i like is you dont have to follow some design stuff
                  instead you do follow logic.
                </div>

                <p className="text-center h5 TopColor" id="top">
                  Languages I speak
                </p>
                <div id="paddings">
                  Node.js, Express.js,Pug, EJS, Handlebars, MongoDb, Mysql,
                  APIs, SysAdmin{" "}
                </div>
                <p className="text-center h5 TopColor" id="top">
                  Dev Tools:
                </p>
                <div id="paddings">
                  <p>
                    Postman <br />
                    Concurrently <br />
                    etc <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center col-md-4" id="bottom">
              <div className="text-center bg-light">
                <p className="text-center h4" id="top">
                  {" "}
                  other stuff
                </p>
                <hr />
                <div id="paddings">
                  There are some other stuff I do such as AWS cloud, Firebase,
                  Penetration Testing, Linux, sometimes Dev Ops, Cooking.
                </div>

                <p className="text-center h5 TopColor" id="top">
                  AWS
                </p>
                <div id="paddings">
                  EC2, S3, Lambda, Load Balancers, auto scaling, VPC, Route53,
                  CloudWatch, CLI, IAM roles, Security and Identity Compliance
                </div>
                <p className="text-center h5 TopColor" id="top">
                  Firebase
                </p>
                <div id="paddings">
                  Realtime Database, Authentication, Firebase Hosting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
