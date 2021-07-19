import React, { useCallback, useEffect, useState, useMemo, useRef } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import '../../assets/css/styles.css';
import SignInImg from "../../assets/images/login.svg";
import Axios from '../../utils/axios';

export default function SignIn(props) {
  const [state, setState] = useState({
    email: 'aka@mail.ru',
    password: '123456',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();
  const emailRef = useRef();
  const [visible, setVisible] = useState(null);

  
  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...state, [name]: value }));

  }, [state]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/login', state);
      console.log(data)
      if (!data.success) {
        return setErrorMsg(data.msg);
      }
      // Store user data and redirect
      history.push('/')
    }
    catch (err) {
      console.log(err.response);
    }
  }

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
                ref={emailRef}
                placeholder="Enter email"
                value={state.email}
                onChange={handleInputChange}
                autoComplete="new-email"
              />
            </div>

            <div className="auth-input">
              <input
                type="password"
                placeholder="Enter password"
                value={state.email}
                onChange={handleInputChange}
                autoComplete="new-password"
              />
            </div>

            <button className="auth-button"> Next step </button>
          </div>
        </div>
      </div>
    </div>
  );
}