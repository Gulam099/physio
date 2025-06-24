'use client'
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
} from "@mui/material";

// Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContent = () => {
 
  const currentYear = new Date().getFullYear();

  // Function to render addresses separately
  const renderAddresses = () => {
    // Hard-coded to ensure proper display
    const addressesToRender = ['C.B.Ganj', 'Bareilly'];

    // Return formatted address components
    return addressesToRender.map((address, index) => (
      <Box
        key={index}
        sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, color: '#d1d5db' }}
      >
        <LocationOnIcon sx={{ mr: 1, color: '#6366f1', flexShrink: 0, mt: 0.3 }} />
        <Typography variant="body2">
          {address.trim()}
        </Typography>
      </Box>
    ));
  };

  const socialIcons = [
    { icon: <FacebookIcon />, name: "Facebook", url: "https://facebook.com/" },
    { icon: <InstagramIcon />, name: "Instagram", url: "https://instagram.com/" },
    { icon: <TwitterIcon />, name: "Twitter", url: "https://twitter.com/" },
    { icon: <LinkedInIcon />, name: "LinkedIn", url: "https://linkedin.com/" },
  ];

  return (
    <Box sx={{ backgroundColor: "#0a2540", color: "white" }}>
      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: "600", mb: 3, color: "#ffffff" }}>
              Rehab hub
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "#d1d5db" }}>
            New-age physio care delivering high-quality personalized treatments by seamlessly integrating clinic, home & tele-rehab
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {socialIcons.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    '&:hover': {
                      backgroundColor: "#4f46e5",
                      transform: 'translateY(-3px)',
                      transition: 'all 0.3s ease'
                    },
                    width: '40px',
                    height: '40px'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 3, color: "#ffffff" }}>
              Company
            </Typography>
            {["About us", "Blogs", "Privacy Policy", "Terms & Conditions"].map((item, index) => (
              <Box key={index} sx={{ mb: 1.5 }}>
                <Link
                  underline="none"
                  component="a"
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: "#ffffff",
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 3, color: "#ffffff" }}>
              Services
            </Typography>
            {["CHIROPRACTOR & DRYNEEDLING & KINESIKOTAPING CRYOTHERAPY    ", "ORTHOPEDIC & SEX & NEUROTHERPIST ", "CAPPIG & FIR &CFR THERAPY", "MAGNET & ACCUPRESSURE&LICH & MOXA& MASSAGETHERAPY "].map((item, index) => (
              <Box key={index} sx={{ mb: 1.5 }}>
                <Link
                  underline="none"
                  component="a"
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: "#ffffff",
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 3, color: "#ffffff" }}>
              Contact Us
            </Typography>

            {/* Addresses using the renderAddresses function */}
            {renderAddresses()}

            {/* Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: '#6366f1' }} />
              <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                +91 9458404336
              </Typography>
            </Box>

            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ mr: 1, color: '#6366f1' }} />
              <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                sheikhshadab352@gmail.com
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ backgroundColor: "#061629", py: 3 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography variant="body2" sx={{ color: "#d1d5db", textAlign: { xs: 'center', md: 'left' } }}>
              © {currentYear} All Rights Reserved by F2 Fintech
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#d1d5db",
                mt: { xs: 2, md: 0 },
                textAlign: { xs: 'center', md: 'right' },
                fontStyle: 'italic'
              }}
            >
              True wealth is not measured by the size of your bank account, but by the freedom to live life on your own terms.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterContent;
