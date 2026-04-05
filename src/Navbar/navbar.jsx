import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, Link } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const company = useSelector((state) => state.company);

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        bgcolor: "blueblack",
        top: "auto",
        bottom: 0,
        width: { xs: 520, sm: "100%", md: "100%" },
      }}
    >
      <Toolbar
        sx={{ flexDirection: "column", alignItems: "flex-start", py: 4 }}
      >
        <Grid container spacing={4}>
          {/* Company Info Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              {company?.name}
            </Typography>

            <Typography variant="body2" color="grey.300">
              Email:{" "}
              <Link
                href={`mailto:${company?.email}`}
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                {company?.email}
              </Link>
            </Typography>

            <Typography variant="body2" color="grey.300">
              TEL:{" "}
              <Link
                href={`tel:${company?.phone}`}
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                {company?.phone}
              </Link>
            </Typography>

            <Typography variant="body2" color="grey.300">
              Mobile Phone:{" "}
              <Link
                href={`tel:${company?.phone}`}
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                {company?.phone}
              </Link>
            </Typography>
            <Typography variant="body2" color="grey.300">
              Contact: Sales Manager
            </Typography>
          </Grid>

          {/* Links Columns */}
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">
                  Company Profile
                </Typography>
                <Typography variant="body2">
                  <Link href="/home" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    Overview
                  </Link>
                </Typography>
                <Typography variant="body2">
                  <Link href="/aboutus" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    History
                  </Link>
                </Typography>
              
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">
                  Products
                </Typography>
                <Typography variant="body2">
                  <Link href="/products" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    Wiring Harness
                  </Link>
                </Typography>
           
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">
                  Applications
                </Typography>
                <Typography variant="body2">
                  <Link href="/application" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    Vehicle
                  </Link>
                </Typography>
             
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">
                  Support
                </Typography>
             
                <Typography variant="body2">
                  <Link href="#" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    Brand Info
                  </Link>
                   </Typography>
                                   <Typography variant="body2">
                    <Link href="/electrical" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    Electrical
                  </Link>
                    </Typography>
                     <Typography variant="body2">
                    <Link href="/electronics" color="inherit"    underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                    Electronics
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
