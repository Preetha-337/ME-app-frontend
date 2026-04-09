import React from "react"
import {Box,Grid,Typography,Slide,Card} from "@mui/material"
import Electronics1 from "./assets/electronics.png";
function Electronics(){
return(
  <Grid>
     <Box p={3} sx={{width: { xs: "100%", sm:"98%", md: "100%" }}}>
 <Typography
  variant="h5"

  fontWeight={700}
  align="center"
  gutterBottom
  sx={{ color: "navy",ml:{xs:-4,md:0,sm:0} }}

>
  Brands We Deal in – Electronics
</Typography>

  
      <Slide in={true} direction="up" timeout={800}>
        <Card sx={{ p: 2,ml:{sm:0,md:0,xs:-2}   , width:{md:"95%",xs:"90%"}  }}>
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
    </Grid>
)
}
export default Electronics