import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import initSocket from "./socket";
import App from "./App";

initSocket(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
