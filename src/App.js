import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar/NavBar'
import Home from "./containers/Home";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import AddAuthor from "./containers/AddAuthors";
import Authors from './containers/Author';
import AddBook from "./containers/AddBook/";

import "./assets/css/styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route component={Home} exact path={["/", '/books', '/products']} />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={AddAuthor} exact path="/add-author" />
        <Route component={Authors} exact path="/authors" />
        <Route component={AddBook} exact path="/add-book" />
        <Route component={SignIn} />
      </Switch>
    </div>
  );
}