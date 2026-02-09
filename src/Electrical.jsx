import React from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
// import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";

import {
  Box,
  Typography,
  Card,
  Slide,
  Grid
} from "@mui/material";

function Electrical() {
  return (
    <Box p={3} sx={{width: { xs: 500, sm:"98%", md: "100%" }}}>
      <Typography
        variant="h4"
  fontWeight={700}
  align="center"
  gutterBottom
  sx={{ color: "navy" }}
      >
        Brands We Deal in – Electrical
      </Typography>

      <Slide in={true} direction="up" timeout={800}>
     
        <Grid container spacing={2} justifyContent="center">
          
          {[image1, image2, image3, image4, image5, image7,image8,image9,image10,image11].map(
            (img, index) => (
              <Grid item key={index}>
                <Card sx={{ p: 2,   transition: "all 0.4s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0px 18px 40px rgba(0,0,0,0.25)",
            },}}>
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      width: 200,
                      height: 200,
                      objectFit: "contain"
                    }}
                  />
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Slide>
    </Box>
  );
}

export default Electrical;
