'use client'
import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom color="primary">
          About Us
        </Typography>

        <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          At <strong>RestoreMotion Physiotherapy</strong>, we are dedicated to empowering you through movement. Our
          team of licensed physiotherapists offers personalized care designed to help you recover, prevent injury, and
          maintain long-term wellness.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              Our Approach
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We use evidence-based techniques including manual therapy, targeted exercises, and lifestyle guidance to
              support your recovery. Every treatment plan is tailored to your individual goals and condition.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              Why Choose Us
            </Typography>
            <List dense>
              {[
                'Certified and compassionate therapists',
                'Personalized treatment plans',
                'Modern equipment & clean facility',
                'Flexible appointment options',
                'Welcoming and friendly environment',
              ].map((text, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
