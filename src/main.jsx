import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ThemeProvider>

      <UserProvider>

        <CartProvider>

          <BrowserRouter>

            <App />

          </BrowserRouter>

        </CartProvider>

      </UserProvider>

    </ThemeProvider>

  </React.StrictMode>
);