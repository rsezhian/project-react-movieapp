//
// emailjs.send(serviceID, templateID, templateParams, publicKey);

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  let [from_name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let submitHandler = () => {
    if (from_name == "" || email == "" || message == "") {
      alert("All the fields are required, and no fields are empty");
    } else {
      emailjs.send(
        "service_i53o4c6",
        "template_terzd5t",
        {
          from_name: from_name,
          to_name: "Elansezhian",
          from_email: email,
          to_email: "elansezhianrajabadar@gmail.com",
          message: message,
        },
        "i3Gta73RG87GhWCzN"
      );
      alert("email submitted successfully");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-4 contact">
        <h1 className="text-secondary">Contact Us</h1>
        <br />
        <div>
          <p>
            <label htmlFor="name">Name:</label>
          </p>
          <input
            type="text"
            value={from_name}
            id="name"
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <p>
            <label htmlFor="email">EMail:</label>
          </p>
          <input
            type="email"
            value={email}
            id="email"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <p>
            <label htmlFor="message">Message:</label>
          </p>
          <textarea
            name="message"
            value={message}
            id="message"
            cols={40}
            rows={5}
            placeholder="Enter your message...."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default Contact;
