import React, { Component } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
