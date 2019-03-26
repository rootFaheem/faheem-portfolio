import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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

import "./Navbar.css";

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
          className="mb-5 bg-light "
          sticky="top"
          style={{ lineHeight: "2.5rem" }}
        >
          <Container>
            <NavLink
              className="text-danger font-bold font-weight-bold brand"
              to="/"
            >
              <img
                src={logo}
                alt="brand"
                style={{
                  height: "70px"
                }}
              />
            </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-3">
                  <NavLink
                    to="/about"
                    className="text-dark mr-3 "
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">About</span>
                  </NavLink>
                </NavItem>

                <NavItem className="mr-3">
                  <NavLink
                    to="/portfolio"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Porfolio</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    to="blog"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Blog</span>
                  </NavLink>
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
