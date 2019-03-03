import React, { Component } from "react";

import "./About.css";

import faheem from "../../assets/faheem.png";
import resume from "../../assets/resume/Faheem_Resume.pdf";
import Footer from "../../components/Layout/Footer/Footer";

class About extends Component {
  state = {
    aboutData: {
      header: "About me",
      data:
        "I'm a Full Stack web Developer based in New Delhi, India. I enjoy making some cool Full Stack web Apps. I do always see everything as problem to be solved. When I am not coding then you will find me on twitter, watching The Big Bang Theory or Mr. Robot. I do use twitter a lot. Twitter has always been my source of my daily news. Why i love Twitter because of its authenticity. I things i always fail in is hit the zym daily."
    }
  };

  render() {
    return (
      <div style={{ background: "#e6ecf0" }}>
        <div className="container">
          <div className="About">
            <div
              className="row justify-content-around align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <div className="col-md-6 col-auto">
                <img
                  src={faheem}
                  alt="geek here"
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    marginTop: "10px",
                    marginBottom: "10px"
                  }}
                />
              </div>

              <div className="col-md-6 col-auto buttonpad ">
                <a href={resume} download>
                  <button className="btn-success btn-lg">
                    <span className="fa fa-download" aria-hidden="true" />
                    Download my Resume
                  </button>
                </a>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="text-center col-md-4 col-auto" id="bottom">
                  <div className="text-justify bg-light" id="borderRadius">
                    <p className="text-center h4 " id="top">
                      {" "}
                      About me
                    </p>
                    <hr />
                    <div id="paddings">
                      I'm a Full Stack Developer, based in New Delhi, India. I
                      write <strong>efficient</strong> and{" "}
                      <strong>clean code</strong>. I stick with{" "}
                      <strong>DRY</strong> principle. I believe code reusability
                      is on of the most important thing for developer. is I do
                      always see everything as a problem to be solved. I do use
                      MERN for my tech stack. When I am not coding then you will
                      find me on twitter, watching The Big Bang Theory or Mr.
                      Robot. I do use twitter a lot. Twitter has always been my
                      source of my daily updates. Twitter and coffee addict.
                    </div>
                  </div>
                </div>
                <div className="text-center col-md-4 col-auto" id="bottom">
                  <div className="text-justify bg-light " id="borderRadius">
                    <p className="text-center h4" id="top">
                      {" "}
                      Education
                    </p>
                    <hr />
                    <div id="paddings">
                      I have completed my High School from Khair Technical Hr.
                      Secondary School with 83% of marks in 2012. <br /> After
                      that, I have completed Diploma in Computer Engineering
                      from{" "}
                      <a
                        href="https://www.jmi.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jamia Millia Islamia
                      </a>
                      , New Delhi with 76% of marks in 2015 <br /> Then I have
                      joined{" "}
                      <a
                        href="http://www.ipu.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GGSIPU
                      </a>{" "}
                      Delhi for my Graduation. So, from GGSIPU I have completed
                      my Bachelor of Technology (B.Tech) in Computer Science and
                      Engineering with 73% of marks in 2018.
                    </div>
                  </div>
                </div>
                <div className="text-center col-md-4 col-auto" id="bottom">
                  <div className="text-justify bg-light" id="borderRadius">
                    <p className="text-center h4" id="top">
                      {" "}
                      Interests
                    </p>
                    <hr />
                    <div id="paddings">
                      I do spend most of ( approx. 70%) my time on my Computer.
                      I enjoy learing any tech/non-tech that can solve my
                      problem. I mostly work on MERN stack, Cloud, Linux. So
                      always love to hear about them. <br /> Some other stuff i
                      like is Elon Musk vision, Crypto, InfoSec. There are lot
                      of entertainment things i like, such as The Big Bang
                      Theory, Mr. Robot, Silicon Valley, Iron Man series. Love
                      to hear about a startup that can solve the present
                      society's problem.
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
            <p style={{ paddingBottom: "20px" }}>
              Skills set is what you are recognised for. Skills and tools i have
              recently worked or currently working on.
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="text-center col-md-4 col-auto" id="bottom">
                  <div className="text-center bg-light" id="borderRadius">
                    <p className="text-center h4" id="top">
                      {" "}
                      Front-end Developer
                    </p>
                    <hr />
                    <div id="paddings">
                      I try to build things from scratch. My strategy is simple
                      but powerful i.e. try to keep things simple and break them
                      into smaller modules, built them by using the best and
                      latest tech stack.
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

                <div className="text-center col-md-4 col-auto" id="bottom">
                  <div className="text-center bg-light" id="borderRadius">
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
                        VS Code <br />
                        Sublime <br />
                        Codepen <br />
                        npm <br />
                        Chrome Dev Tools <br />
                        Postman <br />
                        Concurrently <br />
                        Terminal (iTerm & Hyper) <br />
                        Github <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center col-md-4 col-auto" id="bottom">
                  <div className="text-center bg-light" id="borderRadius">
                    <p className="text-center h4" id="top">
                      {" "}
                      Other Stuff
                    </p>
                    <hr />
                    <div id="paddings">
                      There are some other stuff I do such as AWS cloud,
                      Firebase, Penetration Testing, Linux, sometimes Dev Ops,
                      Cooking.
                    </div>

                    <p className="text-center h5 TopColor" id="top">
                      AWS
                    </p>
                    <div id="paddings">
                      EC2, S3, Lambda, Load Balancers, auto scaling, VPC,
                      Route53, CloudWatch, CLI, IAM roles, Security and Identity
                      Compliance
                    </div>
                    <p className="text-center h5 TopColor" id="top">
                      Firebase
                    </p>
                    <div id="paddings">
                      Realtime Database, Authentication, Firebase Hosting
                    </div>
                    <p className="text-center h5 TopColor" id="top">
                      CMS
                    </p>
                    <div id="paddings">Drupal and Wordpress</div>
                    <p className="text-center h5 TopColor" id="top">
                      Helpers
                    </p>
                    <div id="paddings">localtunnel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
