import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";

function Router({ children }) {
  return (
    <BrowserRouter>
      {children} {/* App will come here */}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
