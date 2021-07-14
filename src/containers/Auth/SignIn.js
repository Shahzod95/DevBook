import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInImg from "../../assets/images/login.svg";

export default function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className="auth">
        <div className="sign-img">
          <img src={SignInImg} alt="Sign img" />
        </div>
        <div className="auth-form">
          <div className="auth-container">
            <h1> Sign In </h1>

            <p className="auth-form-description">
              Do not you have an account?
              <Link to="/sign-up" className="link">
                {" "}
                Sign Up
              </Link>
            </p>

            <div className="auth-input">
              <input
                type="email"
                placeholder="Enter email"
                value={state.email}
                onChange={inputHandler}
              />
            </div>

            <div className="auth-input">
              <input
                type="password"
                placeholder="Enter password"
                value={state.email}
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