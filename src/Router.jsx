import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Navbar/Header";
import Allmodule from "./Allmodule";
import Banner from "./Banner";
import Home from "./home";
import { Container, Stack, AppBar, Toolbar, Grid, Box, Typography } from "@mui/material";
import Aboutus from "./Aboutus";

function Router() {
  return (
    <>
 <AppBar 
        position="fixed"
        sx={{ 
          top: 0,
          left: 0,
          right: 0,
          width: "100vw", // Full viewport width
       background: "linear-gradient(135deg, #2980b9, #6dd5fa)",



          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          minHeight: { xs: 56, sm: 64 }, // Responsive toolbar height
          px: { xs: 2, sm: 3 }, // Responsive padding
          width: "100%",
          maxWidth: "100%",
        }}>
          <Typography 
            // variant={isMobile ? "subtitle1" : "h6"} 
            component="div"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
           Mooga Enterprises
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
              <Header />
          </Box>
        </Toolbar>
      </AppBar>
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
