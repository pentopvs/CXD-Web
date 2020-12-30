import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "UA-173923493-1",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById("root"));
