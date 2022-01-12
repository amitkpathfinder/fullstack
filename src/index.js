import ReactDOM from "react-dom";
import React from "react";
import App from "./app";
import store from "./store/store";
import { Provider } from "react-redux";

console.log(store.getState());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
