import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid
} from "@mui/material";

function MarketClients() {
const cardStyle = {
  background: "linear-gradient(135deg, #e3f2fd, #f5faff)", 
  color: "#000",
  height: "100%",
   width: { xs: 700, sm: 590, md: 590 },
  borderRadius: "16px",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  boxShadow: "0px 6px 18px rgba(0,0,0,0.12)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0px 14px 30px rgba(36, 21, 94, 0.25)",
  },
};


  return (
    <Box p={2} sx={{width:{xs:500,sm:"100%",md:"100%"}}}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 ,fontWeight: 700,color: "#1e50a2", textAlign: "center"}}>
        Market and Clients
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {/* Target Market Card */}
        <Grid item xs={6} md={6} display="flex">
          <Card elevation={3} sx={cardStyle}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Target Market
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Automotive manufacturers, industrial equipment manufacturers,
                consumer electronics companies, and OEMs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Key Clients Card */}
        <Grid item xs={12} md={6} display="flex">
          <Card elevation={3} sx={cardStyle}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Key Clients
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Major automotive and industrial companies across India and
                international markets.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MarketClients;
