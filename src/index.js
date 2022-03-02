import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/styles/style_global.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      limit={3}
      draggable={true}
      position="top-left"
      hideProgressBar={true}
      style={{ width: "50%", textAlign: "center" }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
