import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuProvider from "react-flexible-sliding-menu";
import App from "./App";
import Menu from "../src/components/Menu";
import "../src/components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <MenuProvider MenuComponent={Menu} animation="push">
      <App />
    </MenuProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
