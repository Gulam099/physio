"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Paper,
  Stack,
  Fade,
  Container,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const images = [
  "/images/image1.JPG",
  "/images/image2.JPG",
  "/images/image3.JPG",
];

export default function MUICarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const theme = useTheme();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    // Reset the timer when manually changing slides
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsPlaying(true);
    }
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    // Reset the timer when manually changing slides
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsPlaying(true);
    }
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    // Reset the timer when manually changing slides
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsPlaying(true);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Full width container with empty space on sides */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          px: { xs: 0, sm: 4, md: 8, lg: 12 },
        }}
      >
        <Paper
          elevation={8}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            borderRadius: 3,
            overflow: "hidden",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Image Container */}
          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", sm: "400px", md: "500px" },
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {images.map((img, index) => (
              <Fade
                key={img}
                in={index === current}
                timeout={800}
                style={{
                  display: index === current ? "block" : "none",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Slide ${index}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Fade>
            ))}

            {/* Centered Controls */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <IconButton
                onClick={prevSlide}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                onClick={nextSlide}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Indicator Dots */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                bottom: 16,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {images.map((_, index) => (
                <IconButton
                  key={index}
                  onClick={() => goToSlide(index)}
                  size="small"
                  sx={{
                    color:
                      index === current
                        ? theme.palette.primary.main
                        : "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      color: theme.palette.primary.light,
                    },
                  }}
                >
                  <FiberManualRecordIcon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Paper>
      </Container>

      {/* Full width navigation (optional - alternative approach) */}
      {/* Uncomment this section if you want navigation arrows outside the main carousel
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        width: '100%', 
        transform: 'translateY(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        pointerEvents: 'none',
        zIndex: 2
      }}>
        <IconButton 
          onClick={prevSlide}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            pointerEvents: 'auto',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton 
          onClick={nextSlide}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            pointerEvents: 'auto',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      */}
    </Box>
  );
}
