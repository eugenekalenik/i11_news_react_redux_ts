import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import News from "./components/News";
import "./css/index.css";
import { store } from "./store";

ReactDOM.render(
  <Provider store={ store }>
    <News />
  </Provider>, document.getElementById("root"));
