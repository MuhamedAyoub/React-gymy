import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// * Start Import Styles
import "./styles/normalize.css";
import "./styles/App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "./styles/App.scss";
// * End Import Styles
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Fragment>
    <App />
  </Fragment>
);
