import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import Author from "./containers/Authors/Author";
import NavBar from './components/Navbar/NavBar';

import "./assets/style/styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={Author} exact path="/author" />
        <Route component={SignIn} />
      </Switch>
    </div>
  );
}