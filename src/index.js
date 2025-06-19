import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This enables the navbar toggle

import "@fortawesome/fontawesome-free/css/all.min.css";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
