import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//containers
import Homepage from "../containers/Homepage";
import ContactPage from "../containers/ContactPage";

//components
import MainNav from "./MainNav";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <MainNav />
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
