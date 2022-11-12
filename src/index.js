import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/roadmap.css";
import "./css/404.css";
import "./css/navbar.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./components/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);
