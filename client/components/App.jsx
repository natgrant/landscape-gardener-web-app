import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//containers
import Homepage from "../containers/Homepage";
import ContactPage from "../containers/ContactPage";

//components
import MainNav from "./MainNav";

export class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <MainNav />
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={ContactPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
