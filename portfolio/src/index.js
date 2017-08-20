import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
