import React from "react";
import ReactDOM from "react-dom/client";

import "./global_styles/normalize.css";
import "./global_styles/index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
