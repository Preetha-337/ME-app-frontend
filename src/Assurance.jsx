import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const AssuranceAndQualityCharts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Data for Quality Metrics Chart
  const qualityMetricsData = [
    { name: "2021", "Code Quality": 85, "Test Coverage": 78, "Bug Resolution": 92 },
    { name: "2022", "Code Quality": 88, "Test Coverage": 82, "Bug Resolution": 94 },
    { name: "2023", "Code Quality": 92, "Test Coverage": 87, "Bug Resolution": 96 },
    { name: "2024", "Code Quality": 95, "Test Coverage": 91, "Bug Resolution": 98 },
  ];

  // Data for Customer Satisfaction
  const satisfactionData = [
    { name: "Q1", "Satisfaction Rate": 92 },
    { name: "Q2", "Satisfaction Rate": 94 },
    { name: "Q3", "Satisfaction Rate": 96 },
    { name: "Q4", "Satisfaction Rate": 98 },
  ];

  // Data for Service Distribution
  const serviceDistributionData = [
    { name: "Web Development", value: 35 },
    { name: "Mobile Apps", value: 25 },
    { name: "UI/UX Design", value: 20 },
    { name: "Quality Assurance", value: 15 },
    { name: "Maintenance", value: 5 },
  ];

  // Data for Performance Metrics
  const performanceData = [
    { month: "Jan", performance: 85, target: 80 },
    { month: "Feb", performance: 88, target: 82 },
    { month: "Mar", performance: 90, target: 85 },
    { month: "Apr", performance: 92, target: 87 },
    { month: "May", performance: 94, target: 90 },
    { month: "Jun", performance: 96, target: 92 },
  ];

  // Data for Assurance Milestones
  const milestonesData = [
    { year: "2020", projects: 50, clients: 35 },
    { year: "2021", projects: 75, clients: 50 },
    { year: "2022", projects: 110, clients: 75 },
    { year: "2023", projects: 150, clients: 100 },
    { year: "2024", projects: 200, clients: 135 },
  ];

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];
  const QUALITY_COLORS = ["#4CAF50", "#2196F3", "#FF9800"];

  // Assurance Points
  const assurancePoints = [
    {
      icon: <CheckCircleIcon />,
      title: "100% Quality Guarantee",
      description: "Every project undergoes rigorous quality checks and testing phases.",
    },
    {
      icon: <SecurityIcon />,
      title: "Industry-Standard Security",
      description: "Enterprise-grade security protocols to protect your data and applications.",
    },
    {
      icon: <SpeedIcon />,
      title: "Performance Optimized",
      description: "Applications optimized for speed, scalability, and seamless user experience.",
    },
    {
      icon: <ThumbUpIcon />,
      title: "Client Satisfaction",
      description: "98% client satisfaction rate with ongoing support and maintenance.",
    },
    {
      icon: <TimelineIcon />,
      title: "Continuous Improvement",
      description: "Regular updates and improvements based on user feedback and analytics.",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Growth-Oriented",
      description: "Solutions designed to scale with your business growth and evolving needs.",
    },
  ];

  return (
    <Box
      sx={{
    mb:5,
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">

        <Box mt={1}>
          <Typography variant="h4" component="h3" gutterBottom textAlign="center" sx={{ fontWeight: 600, color: "#1e50a2", mb: 4 ,  width: { xs: 500, sm:"100%", md: "100%" },}}>
            Our Quality Assurance Framework
          </Typography>
          <Grid container spacing={7} direction="row" gap={10}>
            {assurancePoints.map((point, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                     width: { xs: 450, sm:230, md: 450 },
                    height: "100%",
                    borderRadius: 3,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                      background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,247,250,0.4))",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      color: "#4CAF50",
                    }}
                  >
                    <Box sx={{ mr: 2, fontSize: 32 }}>{point.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#2c3e50" }}>
                      {point.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {point.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default AssuranceAndQualityCharts;