import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <ProductList path="/" />
        <Details path="/details" />
        <Cart path="cart" />
        <Default path="*" />
      </Router>
      <Modal />
    </React.Fragment>
  );
}

export default App;
