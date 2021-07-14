import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignUpImg from "../../assets/images/registry.svg";

export default function SignUp() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: ""
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className="auth">
        <div className="sign-img">
          <img src={SignUpImg} alt="Sign img" />
        </div>
        <div className="auth-form">
          <div className="auth-container">
            <h1> Sign Up </h1>

            <p className="auth-form-description">
              Already have an account?
              <Link to="/sign-in" className="link">
                {" "}
                Sign in
              </Link>
            </p>

            <div className="auth-input">
              <input
                type="text"
                placeholder="First name"
                value={value.firstname}
                onChange={inputHandler}
              />
            </div>

            <div className="auth-input">
              <input
                type="text"
                placeholder="Last name"
                value={value.lastname}
                onChange={inputHandler}
              />
            </div>

            <div className="auth-input">
              <input
                type="tel"
                placeholder="Enter phone"
                value={value.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="auth-input">
              <input
                type="email"
                placeholder="Enter email"
                value={value.email}
                onChange={inputHandler}
              />
            </div>

            <div className="auth-input">
              <input
                type="password"
                placeholder="Enter password"
                value={value.password}
                onChange={inputHandler}
              />
            </div>

            <button className="auth-button"> Next step </button>
          </div>
        </div>
      </div>
    </div>
  );
}