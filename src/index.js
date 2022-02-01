import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
/* import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";  no longer needed since we are now using Root.js to create all this*/
import Root from "Root";

import App from "./components/App";

ReactDOM.render(
  <Root>
    <App />
  </Root>,

  document.querySelector("#root")
);
