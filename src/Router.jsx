import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Aboutus from "./Aboutus.jsx";

function Router({ children }) {
  return (
    <BrowserRouter>
      {children} 
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path ="/aboutUs" element={<Aboutus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
