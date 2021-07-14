import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyledComponent from './assets/style';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <GlobalStyledComponent />
      <App />
    </Router>
  </StrictMode>,
  rootElement
);