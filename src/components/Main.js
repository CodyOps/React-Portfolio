import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/portfolio" component={Portfolio} />
  </Switch>
);

export default Main;
