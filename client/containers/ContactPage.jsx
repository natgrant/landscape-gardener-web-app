import React, { Component } from "react";

import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

export class Contact extends Component {
  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Get in touch</h1>
              <h2 className="subtitle">Please enquire below</h2>
            </div>
          </div>
        </section>
        <div className="columns contact-info">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
