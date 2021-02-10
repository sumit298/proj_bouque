import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./Portfolio/about";
import Articles from "./Portfolio/articles";
import Project from "./Portfolio/project";

const PortFolio = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Project} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />
      </div>

      <div className="navigation-sub">
          <Link to="/">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
      </div>
    </Router>
  );
};
export default PortFolio;
