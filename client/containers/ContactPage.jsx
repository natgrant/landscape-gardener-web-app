import React, { Component } from "react";

import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

export class Contact extends Component {
  render() {
    return (
      <div className="columns margin-0">
        <div className="column contact-title is-6">
          <h1 className="title">Contact Us</h1>
        </div>

        <div className="column is-6 contact-info">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
