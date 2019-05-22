import React, { Component } from "react";

import ContactForm from "../components/ContactForm";

export class Contact extends Component {
  render() {
    return (
      <div className="columns contact-col">
        <div className="column contact-title is-4" />

        <div className="column is-6 contact-info">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
