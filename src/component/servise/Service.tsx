import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Container, Grid } from '@mui/material';

const PhysioServices = () => {
  const services = [
    {
      id: 1,
      title: "CLINIC TREATMENTS",
      description: "High quality physiotherapy care at our CB Physiotherapy Centre near you. Best Treatment for Ortho / Neuro Issues",
      image: "/images/image1.JPG",
    },
    {
      id: 2,
      title: "PHYSIO HOME VISITS",
      description: "Home Visits by certified CB Physiotherapists for Patients with mobility issues & for patients looking for convenience",
      image: "/images/home-visits.jpg",
    },
    {
      id: 3,
      title: "DIGITAL CARE (FIZO)",
      description: "Digital Physio Assistant 'FIZO' for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/images/digital-care.jpg",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'white',
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h2" 
                  sx={{ 
                    color: '#00a0a0', 
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PhysioServices;