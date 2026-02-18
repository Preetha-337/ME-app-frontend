import React from "react";
import { Box, Card,Grid, CardContent, Typography, List, ListItem } from "@mui/material";
import transport from "./assets/transport.jpeg";
import transport1 from "./assets/transport1.jpeg";
import transport2 from "./assets/transport2.jpeg";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg"
import img4 from "./assets/img4.jpeg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"
import img7 from "./assets/img7.jpeg"
import img8 from "./assets/img8.jpeg"
import img9 from "./assets/img9.jpeg"
import wire from "./assets/wire.png"
import industrial from "./assets/industrial.png"
import cable from "./assets/cable.png"
import connector1 from "./assets/connector1.jpg"
import connector3 from "./assets/connector3.jpg"
import connector4 from "./assets/connector4.jpg"
function ProductsServices() {
  return (
    <Box p={3} id="product" sx={{  width: { xs: 500, sm:"98%", md: "100%" },}}>
          <Typography variant="h4" fontWeight={800}  gutterBottom  sx={{color: "#1e50a2", textAlign: "center"}}>
              PRODUCTS
              </Typography>
              <Grid container spacing={{md:7,sm:5,xs:5}} alignItems="center" sx={{ mt: {md:2,xs:3,sm:3} , ml: {md:9,xs:1.5,sm:2} }}>
    <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={img7}
        //  alt="terminal"
          sx={{ width: 200, height:200,  objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
  <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={img5}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
  <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={img6}
        //  alt="terminal"
          sx={{ width: 380,   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
   <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={wire}
        //  alt="terminal"
          sx={{ width: 380,   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
    <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={img9}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
   <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={img2}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
   <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={connector4}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
   <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={connector3}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
    <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={cable}
        //  alt="terminal"
          sx={{ width: 270,   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
    <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={connector1}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
  <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={industrial}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
  <Grid item>
    <Card
      elevation={3}
      sx={{
        width: 200,
        height:200,
             overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        },
      }}
    >
     
        <Box
          component="img"
          src={img4}
        //  alt="terminal"
          sx={{ width: "100%",   objectFit: "cover",}}
        />
   
    </Card>
  </Grid>
 
</Grid>
   <Card
  elevation={0}
  sx={{
     background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(245,247,250,0.2))",
 mt:2,
    borderRadius: 4,
    borderLeft: "6px solid #1976d2",
    color: "#000",
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 22px 55px rgba(0,0,0,0.25)",
    },
  }}
>
  <CardContent>
    <Typography
      variant="h6"
      gutterBottom
      sx={{ fontWeight: 700, letterSpacing: 0.5,color: "#1e50a2" }}
    >
      Products & Services
    </Typography>

    {/* Content blocks */}
    {[
      {
        title: "Business Collaboration",
        text:
          "With our credentials and extensive business exposure, we are keen to collaborate with your esteemed organization by offering professional sales and marketing services and participating in your supply chain.",
      },
      {
        title: "Vendor / Customer Registration",
        text:
          "Should there be any official formalities required for registration, we kindly request you to share your Vendor or Customer registration forms for our immediate action.",
      },
      {
        title: "Service Assurance",
        text:
          "We respectfully request you to register our company in your Vendor/Customer list and forward your valuable enquiries for sales, spares, and service. We assure you of our best services at all times.",
        // highlight: true,
      },
      {
        title: "Additional Information",
        text:
          "This profile presents a comprehensive overview of our wiring harness trading business. Please feel free to reach out should you require further details or clarification.",
      },
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 2,
          backgroundColor: "#f5f7fa",
          transition: "all .3s ease",
          "&:hover": {
            backgroundColor: "#1976d2",
            color: "#fff",
          },
        }}
      >
        <Typography fontWeight={700} mb={0.5}>
          {item.title}
        </Typography>

        <Typography
          fontSize={{ xs: "0.85rem", sm: "0.95rem", md: "1rem" }}
          lineHeight={1.7}
          sx={{
            fontWeight: item.highlight ? 600 : 400,
          }}
        >
          {item.text}
        </Typography>
      </Box>
    ))}
  </CardContent>
</Card>

 
    </Box>
  );
}

export default ProductsServices;
