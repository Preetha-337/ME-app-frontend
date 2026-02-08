import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import car from "./assets/car.png";

function Business() {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // animate only once
          }
        },
        { threshold: 0.2 }
      );
  
      if (cardRef.current) observer.observe(cardRef.current);
  
      return () => observer.disconnect();
    }, []);
  return (
    <Grid
      id="aboutUs"
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{
        p: 3,
       maxWidth:{md:"100%",sm:"100%",xs:500},
            width:{md:"98%",sm:"100%",xs:500} ,
        
      }}
    >
      <Grid item xs={12} md={8}>
       <Card
  ref={cardRef}
  elevation={0}
  sx={{
    p: { xs: 2, md: 3 },
    borderRadius: 4,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,247,250,0.4))",
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",

  
    transform: visible
      ? "translateX(0)"
      : "translateX(-150px)",

    opacity: visible ? 1 : 0,

    transition: "transform 1.2s ease-out, opacity 1.2s ease-out",
    willChange: "transform, opacity",
  }}
>

          <CardContent>
            <Grid container spacing={4} alignItems="center">
              {/* LEFT CONTENT */}
              <Grid item xs={12} md={7}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                    fontWeight: 800,
                    color: "#1e50a2",
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  Moogambigai Enterprises
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  Moogambigai Enterprises specializes in the trading,
                  distribution, and supply of high-quality wiring harnesses
                  and electrical components for diverse industrial
                  applications.
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  With a strong focus on reliability, safety, and performance,
                  we deliver precision-engineered solutions that meet
                  international quality standards and customer-specific
                  requirements.
                </Typography>

                {/* PRODUCTS */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
                    fontWeight: 700,
                    mt: 3,
                  }}
                >
                  Products
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 1 }}>
                  {[
                    "Automotive Wiring Harnesses",
                    "Industrial Harnesses",
                    "Consumer Electronics Wiring",
                    "Connectors & Terminals",
                    "Custom Harness Designs",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: 2,
                        py: 1,
                          borderRadius: "20px",
            backgroundColor: "#e3f2fd",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.75rem",
                          sm: "0.85rem",
                          md: "0.95rem",
                        },
                        transition: "all .3s ease",
                        "&:hover": {
                          backgroundColor: "#1976d2",
                          color: "#fff",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>

                {/* WHY CHOOSE US */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
                    fontWeight: 700,
                    mt: 4,
                  }}
                >
                  Why Choose Us
                </Typography>

                <Grid container spacing={2} mt={1}>
                  {[
                    "Strict Quality Control",
                    "Customized Engineering",
                    "Timely Delivery",
                    "Industry Standards",
                    "Customer-Centric Approach",
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          p: 1.5,
                        
                             borderRadius: "20px",
                          backgroundColor: "#e3f2fd",
                          fontWeight: 600,
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.9rem",
                            md: "0.95rem",
                          },
                          transition: "all .3s ease",
                          "&:hover": {
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        {item}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* RIGHT IMAGE */}
              <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={car}
                  sx={{
                    width: { xs: "80%", sm: "50%", md: "70%" },
                    borderRadius: 3,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Business;
