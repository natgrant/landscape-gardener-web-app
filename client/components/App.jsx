import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//containers
import Homepage from "../containers/Homepage";
//components
import Contact from "./Contact";
import MainNav from "./MainNav";

export class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <MainNav />
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contact} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
