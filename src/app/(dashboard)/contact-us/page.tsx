'use client'
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Paper,
  Link,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom color="primary">
            Contact Us
          </Typography>

          <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
            We&apos;d love to hear from you. Feel free to reach out with any questions, appointment requests, or feedback.
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Phone
              </Typography>
              <Link href="tel:+919458404336" underline="none" color="text.primary">
                +91 9458404336
              </Link>

              <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
                <EmailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Email
              </Typography>
              <Link href="mailto:sheikhshadab352@gmail.com" underline="none" color="text.primary">
                sheikhshadab352@gmail.com
              </Link>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                  label="Your Name"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactUs;
