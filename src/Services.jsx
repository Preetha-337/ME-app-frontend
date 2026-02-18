import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import Client from "./Clients";

const cardColors = [
  {
    bg: "#e3f2fd",
    hoverBg: "#bbdefb",
    shadow: "rgba(33, 150, 243, 0.4)",
  },
  {
    bg: "#e8f5e9",
    hoverBg: "#c8e6c9",
    shadow: "rgba(76, 175, 80, 0.4)",
  },
  {
    gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    hoverGradient: "linear-gradient(135deg, #ffe0b2, #ffcc80)",
    shadow: "rgba(255, 152, 0, 0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
    hoverGradient: "linear-gradient(135deg, #f8bbd0, #f48fb1)",
    shadow: "rgba(233, 30, 99, 0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #ede7f6, #d1c4e9)",
    hoverGradient: "linear-gradient(135deg, #d1c4e9, #b39ddb)",
    shadow: "rgba(103, 58, 183, 0.45)",
  },
{
  gradient: "linear-gradient(135deg, #e0fff9, #b3fff0)",      // soft teal
  hoverGradient: "linear-gradient(135deg, #b3fff0, #80ffe6)",
  shadow: "rgba(0, 200, 180, 0.45)",
},
];

const Services = () => {
  const company = useSelector((state) => state.company);
  const [showClients, setShowClients] = useState(false);

  const handleClick = () => {
    setShowClients((prev) => !prev);
  };

  return (
<Box p={3} id="service" sx={{ maxWidth:{md:"100%",sm:"100%",xs:500},
            width:{md:"100%",sm:"100%",xs:500} ,}}>
<Typography
  variant="h4"
  fontWeight={800}
  gutterBottom
  sx={{ color: "#1e50a2", textAlign: "center" }}
>
  SERVICES
</Typography>


  <Grid container spacing={3} sx={{width:"100%"}}>
    {company?.services?.map((service, index) => {
      const color = cardColors[index % cardColors.length];

      return (
        <Grid item xs={6} sm={6} md={4} key={index} p={0} >
          <Card
            sx={{
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width:{md:350,sm:190,xs:200},
              p: 2,
              boxShadow: 3,
              background: color.gradient || color.bg,
              transition: "all 0.35s ease",
              "&:hover": {
                transform: "scale(1.06)",
                boxShadow: `0 20px 40px ${color.shadow}`,
                background: color.hoverGradient || color.hoverBg,
              },
            }}
          >
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {service}
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
      );
    })}
  </Grid>

  {/* Additional Content Section */}
  <Box mt={6}>
    <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: "#1e50a2", textAlign: "center" }}>
      ADDITIONAL SERVICES
    </Typography>
    
    <Grid container spacing={{xs:3,sm:3,md:4}} mt={1}>
      {/* Card 1 - Expertise */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
                  width:{md:"100%",sm:700,xs:480},
            boxShadow: 3,
            background: cardColors[0]?.gradient || cardColors[0]?.bg || "#f0f8ff",
            transition: "all 0.35s ease",
            "&:hover": {
              transform: "scale(1.06)",
              boxShadow: `0 20px 40px ${cardColors[0]?.shadow || "rgba(0,0,0,0.2)"}`,
              background: cardColors[0]?.hoverGradient || cardColors[0]?.hoverBg || "#e6f2ff",
            },
          }}
        >
          <CardContent>
            <Typography variant="body1" textAlign="center" fontWeight={600}>
              Industry Expertise
            </Typography>
            <Typography variant="body2" textAlign="center" mt={1}>
              Specialized knowledge across multiple sectors 
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 2 - Support */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
              width:{md:"100%",sm:700,xs:480},
            boxShadow: 3,
            background: cardColors[1]?.gradient || cardColors[1]?.bg || "#fff0f5",
            transition: "all 0.35s ease",
            "&:hover": {
              transform: "scale(1.06)",
              boxShadow: `0 20px 40px ${cardColors[1]?.shadow || "rgba(0,0,0,0.2)"}`,
              background: cardColors[1]?.hoverGradient || cardColors[1]?.hoverBg || "#ffe6f2",
            },
          }}
        >
          <CardContent>
            <Typography variant="body1" textAlign="center" fontWeight={600}>
              24/7 Support
            </Typography>
            <Typography variant="body2" textAlign="center" mt={1}>
              Round-the-clock assistance and maintenance services
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 3 - Customization */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            boxShadow: 3,
              width:{md:"90%",sm:700,xs:480},
            background: cardColors[2]?.gradient || cardColors[2]?.bg || "#f0fff0",
            transition: "all 0.35s ease",
            "&:hover": {
              transform: "scale(1.06)",
              boxShadow: `0 20px 40px ${cardColors[2]?.shadow || "rgba(0,0,0,0.2)"}`,
              background: cardColors[2]?.hoverGradient || cardColors[2]?.hoverBg || "#e6ffe6",
            },
          }}
        >
          <CardContent>
            <Typography variant="body1" textAlign="center" fontWeight={600}>
              Custom Solutions
            </Typography>
            <Typography variant="body2" textAlign="center" mt={1}>
              Tailored services to meet specific business requirements
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>


 
</Box>
  );
};

export default Services;
