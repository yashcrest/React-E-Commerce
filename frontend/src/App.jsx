import React from "react";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Failed, Home, PageNotFound, Product, Success } from "./Pages";
import { Footer } from "./Components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
