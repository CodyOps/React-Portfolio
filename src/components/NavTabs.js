import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";

function NavTabs() {
  return (
    <div className="demo-big-content">
      <Header className="navbar-color" title="Cody Chen" scroll>
        <Navigation>
          <Link to="/">Home Page</Link>
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
    </div>
  );
}

export default NavTabs;
