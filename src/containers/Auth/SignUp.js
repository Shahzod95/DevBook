import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/styles.css';
import {Button} from '../../style/AuthorStyles';
import SignUpImg from "../../assets/images/registry.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/all';
import axios from 'axios';
import GlobalContext from '../../context/GlobalContext';

export default function SignUp() {

  const context = useContext(GlobalContext);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({ type: '', message: '' });
  const [visible, setVisible] = useState(null);
  const emailRef = useRef();

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/sign-up', value);
      if (data.success) {
        // Store user data and redirect
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        context.setAuthDetails(data);
      } else {
        const msg = handleErrorObject(data?.msg);
        setErrors(msg);
      }
    }
    catch (err) {
      console.log(err.response)
      const msg = handleErrorObject(err.response?.data?.msg);
      setErrors(msg);
    }
  }
  const handleErrorObject = (errorMsg = '') => {
    if (errorMsg.includes('E11000')) {
      return {
        type: 'email',
        message: 'This user exist. Choose another email!'
      }
    }
    const errorType = errorMsg.slice(errorMsg.indexOf('"'), errorMsg.lastIndexOf('"'));
    return {
      type: errorType.replace('\"', '').replace('\\', ''),
      message: errorMsg
    }
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

            <form onSubmit={handleSubmit}>
            <StyledInput type="email" hidden name="email" />
            <StyledInput type="password" hidden name="password" />
              <div className="auth-input">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={value.firstName}
                  onChange={inputHandler}
                />
              </div>

              <div className="auth-input">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={value.lastName}
                  onChange={inputHandler}
                />
              </div>

              <div className="auth-input">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone"
                  value={value.phone}
                  onChange={inputHandler}
                />
              </div>

              <div className="auth-input">
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Enter email"
                  value={value.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="auth-input">
                <input
                  type={visible ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
                  value={value.password}
                  onChange={inputHandler}
                />
                <button
                  type="button"
                  className="password-visible"
                  onClick={() => setVisible(value => !value)}
                >
                  {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>

              <Button> Next step </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}