import React from "react";
import "./Footer.css";

const footer = () => {
    return (
        <div>
            <div className="stickyfooter">
                <footer className="page-footer font-small bg-dark pt-4">
                    <div className="container">
                        <div
                            className="row flex-column-reverse flex-md-row justify-content-center align-items-center"
                            id="spacing"
                        >
                            <div className="col-md-6 col-auto" id="spacingTop">
                                <div className="text-center" id="footerlinks">
                                    <a
                                        className="text-center"
                                        id="footerlinks"
                                        href="/"
                                    >
                                        <small>
                                            &copy; {new Date().getFullYear()}{" "}
                                            faheem
                                        </small>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-auto">
                                <ul style={{ listStyle: "none" }}>
                                    <li style={{ display: "inline" }}>
                                        <a
                                            className=" mr-5"
                                            href="https://twitter.com/rootfaheem"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                marginBottom: "-30px",
                                                marginTop: "-30px"
                                            }}
                                        >
                                            <i
                                                className="fa fa-twitter-square text-light"
                                                style={{
                                                    marginLeft: "-20px",
                                                    marginRight: "-20px",
                                                    marginBottom: "-20px",
                                                    marginTop: "-70px"
                                                }}
                                            />
                                        </a>
                                    </li>
                                    <li style={{ display: "inline" }}>
                                        <a
                                            className="mr-5"
                                            href="https://github.com/FaheemTech"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className="fa fa-github-square text-light"
                                                style={{
                                                    marginLeft: "-20px",
                                                    marginRight: "-20px"
                                                }}
                                            />
                                        </a>
                                    </li>
                                    <li style={{ display: "inline" }}>
                                        <a
                                            className="mr-5"
                                            href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className="fa fa-envelope-square text-light"
                                                style={{
                                                    marginLeft: "-20px",
                                                    marginRight: "-20px"
                                                }}
                                            />
                                        </a>
                                    </li>
                                    <li style={{ display: "inline" }}>
                                        <a
                                            className="mr-5"
                                            href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className="fa fa-linkedin-in text-light"
                                                style={{
                                                    marginLeft: "-20px",
                                                    marginRight: "-20px"
                                                }}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                {/* <a
                  href="https://twitter.com/rootfaheem"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="https://github.com/FaheemTech"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
                <a
                  href="mailto:faheemtech1@gmail.com?Subject=Hello%20faheem"
                  id="textdecoration"
                  role="button"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-envelope bg-light text-danger"
                    style={{
                      borderRadius: "50%"
                    }}
                  >
                    {" "}
                  </i>
                </a>

                <a
                  href="https://www.linkedin.com/in/faheem-ahmad-753705127/"
                  id="textdecoration"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default footer;
