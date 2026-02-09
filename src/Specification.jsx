import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function Specifications() {
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

  const specs = [
    {
      title: "Materials",
      desc:
        "High-quality copper wires, durable PVC insulation, premium plastic connectors, and corrosion-resistant metal terminals.",
    },
    {
      title: "Wire Types",
      desc:
        "Multiple gauges (0.35mm² – 50mm²) with clear color coding for organized installation.",
    },
    {
      title: "Connectors",
      desc:
        "Waterproof, multi-pin, quick-release, and industrial-grade connectors.",
    },
    {
      title: "Temperature & Voltage",
      desc: "Rated up to 105°C and 600V, ensuring long-term operational reliability.",
    },
    {
      title: "Quality Compliance",
      desc: "RoHS compliant and rigorously tested for durability and electrical safety.",
    },
  ];

  return (
    <Box p={2}>
      <Card
        ref={cardRef}
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,247,250,0.4))",
          borderRadius: 4,
          borderLeft: "6px solid #1976d2",
            width: { xs: 500, sm:"100%", md: "100%" },
          color: "#000",
          transform: visible ? "translateX(0)" : "translateX(-120px)",
          opacity: visible ? 1 : 0,
          transition: "all 1.5s ease-out",
          boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: "#1e50a2", letterSpacing: 0.5, textAlign: "center" }}
          >
            Specifications
          </Typography>

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
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexWrap: "wrap", // wrap on small screens
              gap: 2, // spacing between items
            }}
          >
            {specs.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start", // align dot with text
                  gap: 1.5,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#f5f7fa",
                  minWidth: { xs: "100%", sm: 250 }, // responsive width
                  flex: "1 1 250px", // grow/shrink
                  transition: "all 0.3s ease",
                }}
              >
                {/* Accent dot */}
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    mt: 0.5,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    flexShrink: 0,
                  }}
                />

                {/* Text */}
                <Box>
                  <Typography fontWeight={700}>{item.title}</Typography>
                  <Typography fontSize="0.9rem" opacity={0.85}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Specifications;
