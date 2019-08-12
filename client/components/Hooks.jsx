import React, { useState, useEffect, Fragment } from "react";
const axios = require("axios");

const HooksForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let formData = new FormData();

  useEffect(() => {
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("message", message);
  });

  const handleSubmit = e => {
    e.preventDefault();

    console.log("test1", formData);
    console.log("test1", name, phone, address, email, message);

    const config = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    };

    console.log("test2", config);

    axios.post("/api/v1/gardens/messages", formData, config).then(res => {
      alert("Your query has been submitted, thanks!");
      console.log(res);
    });
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
              required
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
              required
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
              required
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
              required
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
