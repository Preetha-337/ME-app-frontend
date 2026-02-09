import React from "react"
import {Box,Grid,Typography,Slide,Card} from "@mui/material"
import Electronics1 from "./assets/electronics.png";
function Electronics(){
return(
     <Box p={3} sx={{width: { xs: 500, sm:"98%", md: "100%" }}}>
 <Typography
  variant="h4"
  fontWeight={700}
  align="center"
  gutterBottom
  sx={{ color: "navy" }}
>
  Brands We Deal in – Electronics
</Typography>

  
      <Slide in={true} direction="up" timeout={800}>
        <Card sx={{ p: 2 }}>
          <Box
            component="img"
            src={Electronics1}
            sx={{
              width: "100%",
              maxWidth: 1200,
              display: "block",
              mx: "auto",
            }}
          />
        </Card>
      </Slide>
    </Box>
)
}
export default Electronics