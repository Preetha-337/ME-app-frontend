import React from "react";
import {
  Box,
  Card,
  Grid,
  CardContent,
  Typography,
  List,
  ListItem
} from "@mui/material";
import transport2 from "./assets/transport2.jpeg";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg"
import img4 from "./assets/img4.jpeg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"
import img3 from "./assets/img3.jpeg"
import img7 from "./assets/img7.jpeg"
import img8 from "./assets/img8.jpeg"
 import img9 from "./assets/img9.jpeg"

function KeyProductsServices() {
  return (
    <Box p={3}>
    <Card
  elevation={0}
  sx={{
 background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,247,250,0.4))",
     width: { xs: "105%", sm:"100%", md: "100%" },
     p:2,
    borderRadius: 4,
      ml:{xs:-3,md:0,sm:0},
    // borderLeft: "6px solid #1976d2",
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    transition: "all .4s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 22px 55px rgba(0,0,0,0.25)",
    },
  }}
>
 <CardContent>
  <Typography
    variant="h6"
    gutterBottom
    sx={{ fontWeight: 700, color: "#1e50a2", letterSpacing: 0.5, textAlign: "center" }}
  >
    Key Products & Services
  </Typography>
    <Box
  sx={{
    width: 50,
    height: 4,
    backgroundColor: "primary.main",
    mt: 1,
    borderRadius: 2,
    mx: "auto", 
  }}
/>
  <Box
    mt={2}
    sx={{
      display: "flex",
      flexWrap: "wrap", // allow wrapping on smaller screens
      gap: 2, // spacing between items
    }}
  >
    {[
      {
        title: "Automotive Wiring Harnesses",
        desc: "Trusted brands including Tyco, Sumitomo, Yazaki, Molex, and Delphi.",
      },
      {
        title: "Industrial Wiring Harnesses",
        desc: "Designed for heavy machinery, automation systems, and industrial use.",
      },
      {
        title: "Consumer Electronics Harnesses",
        desc: "Optimized for home appliances and advanced electronic devices.",
      },
     
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "flex-start", 
          gap: 1.5,
          p: 2,
          borderRadius: 2,
          backgroundColor: "#f5f7fa",
          minWidth: { xs: "100%", sm: 300 }, 
          flex: "1 1 300px", 
          transition: "all 0.3s ease",
        }}
      >
        {/* Accent dot */}
        <Box
          sx={{
            width: 10,
            height: 10,
            mt: 0.5,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            flexShrink: 0,
          }}
        />

        {/* Text */}
        <Box>
          <Typography fontWeight={700}>{item.title}</Typography>
          <Typography fontSize="0.9rem" opacity={0.85}>
            {item.desc}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</CardContent>

</Card>
<Grid
  container
  wrap="nowrap"   
  sx={{
    mt: { md: 2, xs: 3 },
    px:{ md: 7,sm:7, xs: 0},
    overflowX: "auto", 
    gap: 5,         
    scrollBehavior: "smooth",

    // Optional: hide scrollbar
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }}
>
  {[img8, img3, transport2, img9].map((img, index) => (
    <Card
      key={index}
      elevation={3}
      sx={{
        minWidth: 250,   // 🔥 important for horizontal layout
        height: 200,
        flexShrink: 0,   // 🔥 prevents shrinking
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
        src={img}
        alt="product"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Card>
  ))}
</Grid>

    </Box>
  );
}

export default KeyProductsServices;
