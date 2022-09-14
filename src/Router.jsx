import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ToggleMode from "./components/ToggleMode";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Develop from "./pages/Develop";
import Loading from "./components/Loading";

const Router = ({ setDarkmode, darkmode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(!loading);
    }, 3500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home darkmode={darkmode} />} />
            <Route path="/develop" element={<Develop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ToggleMode setDarkmode={setDarkmode} darkmode={darkmode} />
        </BrowserRouter>
      )}
    </>
  );
};

export default Router;
