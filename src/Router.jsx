import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Navbar/Header";
import Allmodule from "./Allmodule";
import Banner from "./Banner";
import Home from "./home";
import Aboutus from "./Aboutus";

function Router() {
  return (
    <>

      <Header />
        <Banner />
      <Allmodule />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<Aboutus />} />
      </Routes>
    
    </>
  );
}

export default Router;
