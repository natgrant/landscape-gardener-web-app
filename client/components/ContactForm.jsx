import React, { Component } from "react";

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        name: "",
        phone: "",
        address: "",
        email: "",
        message: "",
        service: "select"
      },
      submitting: false,
      error: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitting: true });
    fetch("api/v1/gardens/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              body: {
                name: "",
                phone: "",
                address: "",
                email: "",
                message: "",
                service: "select"
              }
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  };

  render() {
    console.log(this.state);
    return (
      <form
        className="column is-half"
        onSubmit={this.handleSubmit}
        className={this.state.error ? "error sms-form" : "sms-form"}
      >
        <div>
          <h2 className="title">Contact Us</h2>
          <br />
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="address"
              placeholder="Enter your address"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              name="email"
              placeholder="Email input"
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>
        <div className="field">
          <label className="label">Service Required</label>
          <div className="control">
            <div className="select">
              <select
                name="service"
                onChange={this.handleChange}
                value={this.state.service}
              >
                <option value="select">Select one</option>
                <option value="Landscape Design">Landscape Design</option>
                <option value="Garden Maintenance">Garden Maintenance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              type="text"
              placeholder="Tell me more..."
              name="message"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              type="submit"
              disabled={this.state.submitting}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
