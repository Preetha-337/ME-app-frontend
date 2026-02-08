import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import {
  EmojiEvents as HeritageIcon,
  Build as SolutionsIcon,
  Verified as QualityIcon,
} from '@mui/icons-material';

const WhyChooseUs = () => {
  const theme = useTheme();

  const mainFeatures = [
    {
      title: 'Why Choose Us?',
      description:
        'Built on a foundation of integrity and decades of industry experience, we are a name you can trust. Our commitment to ethical practices and long-term relationships is at the heart of everything we do.',
      icon: null,
    },
    {
      title: 'Heritage & Trust',
      description:
        'Built on a foundation of integrity and decades of industry experience, we are a name you can trust. Our commitment to ethical practices and long-term relationships is at the heart of everything we do.',
      icon: <HeritageIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Customized Solutions',
      description:
        'We believe one size does not fit all. Our specialty lies in understanding your unique challenges and crafting personalized, innovative, and effective solutions that drive your business forward.',
      icon: <SolutionsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Quality & Assurance',
      description:
        'Our robust quality control systems and established supply chain networks guarantee that you receive only the best products and services, delivered with consistency and precision.',
      icon: <QualityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
  ];

  const handleViewDetails = (section) => {
    console.log(`Viewing details for: ${section}`);
  };

  return (
    <Box sx={{    width:{md:"100%",sm:"100%",xs:510} ,
      overflowX: 'auto', py: 4 }}>
      <Grid
        container
        spacing={1}
        sx={{
          flexWrap: 'nowrap', 
          display: 'flex',
        }}
      >
        {mainFeatures.map((feature, index) => (
          <Grid
            item
            key={index}
            sx={{
              flex: '0 0 300px', 
              
              display: 'flex',
                 width:{md:"100%",sm:"100%",xs:1000} ,
     
            }}
          >
            <Card
              elevation={2}
              sx={{
           
         
                display: 'flex',
                flexDirection: 'column',
                
                transition: 'transform 0.3s, box-shadow 0.3s',
                backgroundColor: index === 0 ? theme.palette.primary.light : 'white', 
                color: index === 0 ? '#fff' : 'text.primary', 
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                {feature.icon && (
                  <Box display="flex" justifyContent="center" mb={3}>
                    {feature.icon}
                  </Box>
                )}
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  textAlign="center"
                  sx={{ fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  color={index === 0 ? '#fff' : 'text.secondary'}
                  textAlign="center"
                  sx={{ lineHeight: 1.7 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
          
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
