import { Link } from "react-router-dom";
import { Component } from "react";
import APIUrl from "./APIUrl";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const sendPasswordResetEmail = async (evt) => {
    evt.preventDefault();
    const response = await fetch(`${APIUrl}/forgotPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
  };
  return (
    <div>
      <h1>ForgotPassword</h1>
      <form onSubmit={sendPasswordResetEmail}>
        <label>Email Address:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />
        <button type="submit" className="btn-secondary">
          Send Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
