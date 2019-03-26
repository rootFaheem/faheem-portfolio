import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Container,
  Nav,
  NavItem
} from "reactstrap";

//  Components import
import About from "../../About/About";
import Portfolio from "../../Portfolio/Portfolio";
import Blog from "../../Blog/Blog";
import Landing from "../MainContent/Landing/Landing";
import NextGenJs from "../../../containers/FullArticle/NextGenJs";
import ReactIntro from "../../../containers/FullArticle/ReactIntro";
import NodeExpressIntro from "../../../containers/FullArticle/NodeExpressIntro";
import logo from "../../../assets/logo.png";

// import "./Navbar.css";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar
          expand="md"
          light
          className="bg-dark text-center"
          style={{ lineHeight: "2.5rem" }}
        >
          <Container>
            <NavLink className="text-center" to="/">
              <img
                src={logo}
                alt="brand"
                style={{
                  height: "50px"
                }}
              />
            </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-5">
                  <NavLink
                    to="/about"
                    className="text-light mr-2 "
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">About</span>
                  </NavLink>
                </NavItem>

                <NavItem className="mr-2">
                  <NavLink
                    to="/portfolio"
                    className="text-light mr-5"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Porfolio</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-5">
                  <NavLink
                    to="blog"
                    className="text-light mr-5"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Blog</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <ul style={{ listStyle: "none" }}>
                    <li style={{ display: "inline" }}>
                      <a
                        className=" mr-5"
                        href="https://twitter.com/rootfaheem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-twitter-square text-light"
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
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
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
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
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
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
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog" exact component={Blog} />
          <Redirect from="/" to="about" />
          <Route path="/" component={Landing} />

          <Route
            path="/blog/next-generation-javascript"
            component={NextGenJs}
          />
          <Route path="/blog/react-introduction" component={ReactIntro} />
          <Route
            path="/blog/node-express-introduction"
            component={NodeExpressIntro}
          />
        </Switch>
      </div>
    );
  }
}

//  UPDATED NAVBAR GOES HERE

export default AppNavbar;
