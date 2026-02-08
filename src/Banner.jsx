import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bannervideo from "./assets/bannervideo.mp4";

function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        width:{md:"100%",sm:"100%",xs:520} ,
        height: { xs: "260px", sm: "350px", md: "500px" },
        overflow: "hidden",
        mt: 1,
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={bannervideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "35%", md: "8%" },
          transform: { xs: "translate(-50%, -50%)", md: "translateY(-50%)" },
          zIndex: 2,
          color: "#fff",
          maxWidth: { xs: "90%", md: "40%" },
          textAlign: { xs: "left", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "2.2rem", md: "2rem" },
            fontWeight: 600,
            color: "#1e50a2",
            mb: 2,
          }}
        >
          Moogambigai Enterprises
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.05rem", md: "1.25rem" },
            mb: 3,
            lineHeight: 1.5,
          }}
        >
          Best supplier of high-quality wiring harnesses and electrical components.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() =>
            document.getElementById("products")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default Banner;
