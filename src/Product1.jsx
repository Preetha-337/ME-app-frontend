import React from "react";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Typography, List, ListItem, Grid } from "@mui/material";
import automotive from './assets/automotive.png';
import industrial from './assets/industrial.png';
import cable from './assets/cable.png';
import connector2 from './assets/connector2.jpg';
import terminal from './assets/terminal.png';

const Product1 = () => {
  const company = useSelector((state) => state.company);

  return (
    <Box p={2} id="products" sx={{  width: { xs: 500, sm: 700, md:"100%" }}}>
<Card
  elevation={4}
  sx={{
    background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,247,250,0.4))",
    borderRadius: 3,
    mb: 4,
       width:{md:"100%",sm:700,xs:500} ,
     
  }}
>
  <CardContent>
    <Typography
      variant="h5"
      sx={{ fontWeight: 600, mb: 2, position: "relative", textAlign: "center",color: "#1e50a2" }}
    >
      Our Products
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

    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
      {company?.productRange?.map((item, index) => (
        <Box
          key={index}
          sx={{
            px: 2,
            py: 1,
            borderRadius: "20px",
            backgroundColor: "#e3f2fd",
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "all 0.3s ease",
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
  </CardContent>
</Card>

<Grid
  container
  spacing={{ md: 8, sm: 30, xs: 30 }}
  alignItems="center"
  direction="row"
  sx={{
    mt: { md: 2, xs: 3 },
    px: { xs: 2, md: 1 },
    flexWrap: { xs: "nowrap", md: "wrap" },
    overflowX: { xs: "auto", md: "visible" }, 
  }}
>
  {[automotive, industrial, connector2, terminal].map((img, index) => (
    <Grid item key={index} xs="auto">
      <Card
        elevation={3}
        sx={{
          width: { md: 250, sm: 220, xs: 200 },
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
          },
        }}
      >
        <CardContent sx={{ p: 1 }}>
          <Box
            component="img"
            src={img}
            alt="product"
            sx={{
              width: "80%",
              height: "auto",
              display: "block",
              mx: "auto", 
            }}
          />
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


    </Box>
  );
};

export default Product1;
