import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Navbar/Header";
import Allmodule from "./Allmodule";
import Banner from "./Banner";
import Home from "./home";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar/navbar";
import ME from "./assets/ME.jpeg";
import Contact from "./Contact";
import Electronics from "./Electronics";
import Electrical from "./Electrical";
import Application from "./Application";
import Services from "./Services";
import Business from "./Business";
import Products from "./Products"
import SubmitRFQ from "./SubmitRFQ"
import Product1 from "./Product1";
function Router() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(135deg, #2980b9, #6dd5fa)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            src={ME}
            
            sx={{ml:{xs:-2,md:-2,sm:-2}, width: { md: "8%",sm:"20%", xs: "18%"}, borderRadius: "20%" }}
          />

          <Typography sx={{ml:{xs:0,md:-2,sm:-2},fontSize:{xs:"12px",sm:"20px",md:"15px"}}}>MOOGAMBIGAI ENTERPRISES</Typography>

          <Header />
        </Toolbar>
      </AppBar>

      {/* push content below fixed AppBar */}
      <Toolbar />

      <Routes>
        {/* redirect to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* HOME PAGE ONLY */}
        <Route
          path="/home"
          element={
            <>
              <Banner />
              <Allmodule />
            </>
          }
        />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/application" element={<Application/>}/>
        <Route path ="/service" element ={<Services/>}/>
        <Route path="/aboutUs" element={<Business/>}/>
        <Route path="/product" element ={<Products/>}/>
        <Route path ="/products" element={<Product1/>}/>
        <Route path="/submit" element ={<SubmitRFQ/>}/>
      </Routes>

      <Navbar />
    </>
  );
}

export default Router;
