import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, Link } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const company = useSelector((state) => state.company);

  return (
    <AppBar position="static" color="primary" sx={{ bgcolor:"blueblack",top:"auto",bottom:0,  width: { xs: 520, sm:"100%", md: "100%" }, }}>
      <Toolbar sx={{ flexDirection: "column", alignItems: "flex-start", py: 4 }}>
        <Grid container spacing={4}>
          {/* Company Info Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              {company?.name}
            </Typography>
            <Typography variant="body2" color="grey.300">
              TEL: {company?.phone}
            </Typography>
            <Typography variant="body2" color="grey.300">
              Mobile Phone: {company?.phone}
            </Typography>
            <Typography variant="body2" color="grey.300">
              Contact: Sales Manager
            </Typography>
            <Typography variant="body2" color="grey.300">
              Email: {company?.email}
            </Typography>
          </Grid>

          {/* Links Columns */}
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">Company Profile</Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Overview</Link></Typography>
                <Typography variant="body2"><Link href="#" color="inherit">History</Link></Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Honors</Link></Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">Products</Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Wiring Harness</Link></Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Power Plug</Link></Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">Applications</Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Vehicle</Link></Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Non-road solutions</Link></Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2" color="grey.400">Support</Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Technical Support</Link></Typography>
                <Typography variant="body2"><Link href="#" color="inherit">Brand Info</Link></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
