import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar/NavBar'
import Home from "./containers/Home";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import Author from "./containers/Authors/Author";
import AddBook from "./containers/AddBook/";

import "./assets/style/styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route component={Home} exact path={["/", '/books', '/products']} />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={Author} exact path="/author" />
        <Route component={AddBook} exact path="/add-book" />
        <Route component={SignIn} />
      </Switch>
    </div>
  );
}