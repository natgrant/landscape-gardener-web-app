import React, { useState, Fragment } from "react";

const HooksForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: console.log(message)
    };

    fetch("/api/v1/gardens/messages", config).then(res => res.json());
  };

  return (
    <Fragment>
      <h2 className="title">Contact Us</h2>
      <form className="column is-half" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your Name"
              type="text"
              name="name"
              // required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              value={phone}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              type="number"
              name="phone"
              // required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              className="input"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Enter your Address"
              type="text"
              name="address"
              // required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your Email"
              type="email"
              name="email"
              // required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tell me more..."
              type="text"
              name="message"
              required
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-info" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default HooksForm;
