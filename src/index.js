import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
