import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import Author from "./containers/Authors/Author";

import "./assets/style/styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign in</NavLink>
        <NavLink to="/author">Authors</NavLink>
      </header>
      
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={Author} exact path="/author" />
        <Route component={SignIn} />
      </Switch>
    </div>
  );
}