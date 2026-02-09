import React from "react";
import { Box, Card, CardContent, Typography,  List,
  ListItem } from "@mui/material";

function PersonalizedAdvice() {
  return (
       <Box p={2}>
     <Card
  elevation={0}
  sx={{
    background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,247,250,0.4))",
    width: { xs: 500, sm:"100%", md: "100%" },
    borderRadius: 4,
    borderLeft: "6px solid #1976d2",
    color: "#000",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: "all 0.35s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
    },
  }}
>
  <CardContent>
    <Typography
      variant="h6"
      gutterBottom
      sx={{ fontWeight: 700, letterSpacing: 0.4 ,color: "#1e50a2", textAlign: "center"}}
    >
      Personalized Sourcing Advice
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
    {[
      "MOOGAMBIGAI ENTERPRISES offers expert guidance through deep knowledge of both global and domestic sourcing networks, serving as a valuable resource for your procurement needs.",
      "Reach out with your inquiry. If we are unable to directly supply your requirements, we will gladly assist by recommending reliable alternative sources.",
    ].map((text, index) => (
      <Box
        key={index}
        sx={{
          p: 2,
          mb: 1.5,
          borderRadius: 2,
          backgroundColor: "#f5f7fa",
          fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
          lineHeight: 1.7,
          transition: "all .3s ease",
          // "&:hover": {
          //   backgroundColor: "#1976d2",
          //   color: "#fff",
          //   transform: "translateX(6px)",
          // },
        }}
      >
        {text}
      </Box>
    ))}
  </CardContent>
</Card>

    </Box>
  );
}

export default PersonalizedAdvice;
