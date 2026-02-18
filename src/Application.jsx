import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Household from "./assets/Household.png";
import gadgets from "./assets/gadgets.png";
import medical from "./assets/medical.png";
import automobile from "./assets/automobile.png";
import industrial1 from "./assets/industrial1.png";
import communication  from "./assets/communication.png";

const applications = [
  { title: "Household", img: Household },
  { title: "Gadgets", img: gadgets },
  { title: "Medical", img: medical },
    {title:"Communication",img:communication},
  { title: "Automobile", img: automobile },
  { title: "Industrial", img: industrial1 },

];

function Application() {
  return (
    <Grid
      id="application"
      container
      spacing={{xs:7,sm:7,md:4}}
    
      sx={{  p: 5 ,width:{xs:500,sm:"100%",md:"100%"},height:"100%"}}
    >
      {applications.map((app, index) => (
        <Grid
          item
          key={index}
          xs={6}        
          sm={4}       
          md={3}      
        >
          <Card
            elevation={3}
            sx={{
              height: "100%",
              textAlign: "center",
              width:{xs:150,sm:150,md:330},
              p: 1,
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(245,247,250,0.1))",
              transform: "translateY(50px)",
              opacity: 0,
              animation: `slideUp 0.6s ease forwards ${index * 0.15}s`,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ mb: 2, color: "#1e50a2", fontWeight: 800 }}
              >
                {app.title}
              </Typography>

              <Box
                component="img"
                src={app.img}
                alt={app.title}
                sx={{
                  width: "100%",
                  maxWidth: {xs:120,sm:120,md:200},
                  height: "auto",
                  mx: "auto",
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}

      <style>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </Grid>
  );
}

export default Application;
