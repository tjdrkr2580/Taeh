import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ToggleMode from "./components/ToggleMode";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Develop from "./pages/Develop";

const Router = ({ setDarkmode, darkmode }) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/develop" element={<Develop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToggleMode setDarkmode={setDarkmode} darkmode={darkmode} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
