import React, { Component } from "react";

import { Header } from "../components/Header";
import { Services } from "../components/Services";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
      </div>
    );
  }
}

export default Homepage;
