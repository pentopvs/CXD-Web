import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import TagManager from "react-gtm-module";

//For creating static pages
import { hydrate, render } from "react-dom";

// const tagManagerArgs = {
//   gtmId: "UA-173923493-1",
// };

// TagManager.initialize(tagManagerArgs);

// ReactDOM.render(<App />, document.getElementById("root"));

//Static pages
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
