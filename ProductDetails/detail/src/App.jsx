import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Products from "./pages/Products";


import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/products" element={<Products />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
