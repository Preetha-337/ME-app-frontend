import React from "react";
import { useSelector } from "react-redux";
import client from "./assets/client.png";
import {
  Box,
  Card,
  CardContent,
  Typography
} from "@mui/material";

const Client = () => {
  const company = useSelector((state) => state.company);

  return (
    <Box id="clients" sx={{ maxWidth: 800, mx: "auto", mt: 6, px: 2 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
       CLIENTS
      </Typography>

      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 ,  transition: "all 0.35s ease",
    "&:hover": {
      transform: "scale(1.06)",
      boxShadow: "0 20px 40px rgba(33, 150, 243, 0.4)",
      backgroundColor: "#bbdefb"
    }}}>
        <CardContent>
          {/* <Typography variant="h5" textAlign="center" gutterBottom>
            {company?.name}
          </Typography> */}

          <Box
            component="img"
            src={client}
            alt={company?.name}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              mt: 2
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Client;
