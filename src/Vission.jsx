import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function VisionMissionCards() {
  const cards = [
    {
      title: "Vision",
      content:
        "To be the most reliable and cost-effective wiring harness supplier, setting the industry standard for quality, innovation, and sustainability. We aim to embrace advanced technologies, foster global partnerships, and expand our presence internationally, delivering solutions that exceed expectations while upholding ethical practices and environmental responsibility.",
    },
    {
      title: "Mission",
      content:
        "To consistently meet customer expectations of quality, cost, and on-time delivery through continuous improvement and innovation. We foster a culture of excellence, ethical practices, and teamwork to exceed expectations, drive growth, and create long-term value for our partners, employees, and communities.",
    },
  ];

  return (
    
    <Box
    id="skill"
      sx={{
        flexGrow: 1,
        p: { xs: 1, sm: 3, md: 4 },
        my: { xs: 1, md: 4 },
      
        width:{md:"100%",xs:500,sm:700}
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {cards.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6} 
            md={5} 
            sx={{ display: "flex", justifyContent: "center" ,  width: { xs:"100%", sm: 700, md: 350 },}}
          >
               <Box
           sx={{
  width: { xs: "100%", sm: 700, md: 350 },
  minHeight: 200,
 
  borderRadius: "20px",
  background: "linear-gradient(135deg, #ffe0e0, #d0e7ff)", 
  color: "#1a1a1a", 
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)", 
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "scale(1.05) rotate(-1deg)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
}}

            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  mb: 2,
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  lineHeight: 1.5,
                }}
              >
                {card.content}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VisionMissionCards;
