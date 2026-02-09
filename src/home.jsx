import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Slide,
  Divider,
  Chip,
  Stack,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Business,
  CalendarToday,
  LocationOn,
  Phone,
  Email,
  Category,
  Engineering,
  Public,
  Verified,
} from "@mui/icons-material";

const Home = () => {
  const company = useSelector((state) => state.company);
  const theme = useTheme();
  const cardRef = useRef(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); 

  // Set responsive font sizes
  const headerFontSize = isMobile ? "1.4rem" : isTablet ? "1.6rem" : "1.9rem";
  const subHeaderFontSize = isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem";
  const listFontSize = isMobile ? "0.75rem" : isTablet ? "0.85rem" : "0.95rem";
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
    <Box
    id="home"
      p={2}
      sx={{    maxWidth:{md:"100%",sm:"100%",xs:500},
            width:{md:"98%",sm:"100%",xs:500} ,
        }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
    >
   
      <Slide direction="down" in={true} mountOnEnter timeout={1200}>
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

          <CardContent sx={{ p: isMobile ? 2 : 4 }}>
            {/* Header */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                color: "primary.main",
                mb: 1,
                fontSize: headerFontSize,
              }}
            >
              MOOGAMBIGAI ENTERPRISES
            </Typography>

            <Typography
              variant="body2"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 3, fontSize: subHeaderFontSize }}
            >
              A snapshot of who we are and how we deliver value
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Horizontal Split */}
            <Grid
              container
              spacing={isMobile ? 2 : 4}
              direction={isMobile ? "column" : "row"} // Stack on mobile
            >
             
              <Grid item xs={12} md={6}>
                <List>
                  {[
                    { icon: <Business />, label: "Name", value: company?.name },
                    { icon: <CalendarToday />, label: "Established", value: company?.established },
                    { icon: <LocationOn />, label: "Location", value: company?.location },
                    { icon: <Phone />, label: "Phone", value: company?.phone },
                    { icon: <Email />, label: "Email", value: company?.email },
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        {React.cloneElement(item.icon, { color: "primary", fontSize: isMobile ? "small" : "medium" })}
                      </ListItemIcon>
                      <Typography sx={{ fontSize: listFontSize }}>
                        <strong>{item.label}:</strong> {item.value}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>

              {/* RIGHT SIDE – Business Info */}
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  {/* Business Type */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Category color="primary" fontSize={isMobile ? "small" : "medium"} />
                    <Typography fontWeight={600} sx={{ fontSize: listFontSize }}>
                      Business Type
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: listFontSize }}>
                    Trading, distribution, and customized wiring harness solutions for automotive and industrial applications.
                  </Typography>

                  {/* Industry Focus */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Engineering color="primary" fontSize={isMobile ? "small" : "medium"} />
                    <Typography fontWeight={600} sx={{ fontSize: listFontSize }}>
                      Industry Focus
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="Automotive" size={isMobile ? "small" : "medium"} />
                    <Chip label="Industrial" size={isMobile ? "small" : "medium"} />
                    <Chip label="Electronics" size={isMobile ? "small" : "medium"} />
                    <Chip label="OEM Supply" size={isMobile ? "small" : "medium"} />
                  </Stack>

                  {/* Operational Reach */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Public color="primary" fontSize={isMobile ? "small" : "medium"} />
                    <Typography fontWeight={600} sx={{ fontSize: listFontSize }}>
                      Operational Reach
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: listFontSize }}>
                    Serving clients across India with growing international partnerships.
                  </Typography>

                  {/* Quality Commitment */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Verified color="primary" fontSize={isMobile ? "small" : "medium"} />
                    <Typography fontWeight={600} sx={{ fontSize: listFontSize }}>
                      Quality Commitment
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: listFontSize }}>
                    Strict quality checks, reliable sourcing, and compliance with industry standards.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Slide>
    </Box>
  );
};

export default Home;
