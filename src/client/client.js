// start point for client side application

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

ReactDOM.hydrate(<Home></Home>, document.querySelector("#root"));
