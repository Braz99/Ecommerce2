import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../src/styles/style_global.css'
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer limit={3} style={{ borderRadius: "5px" }} />
  </React.StrictMode>,
  document.getElementById("root")
);
