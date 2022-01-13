import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/page-not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
