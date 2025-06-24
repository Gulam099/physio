import React from "react";
import {
  Badge,
  Hub,
  EventAvailable,
  HeadsetMic,
  CreditCard,
  ChatBubbleOutline,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

const features = [
  {
    icon: <Badge fontSize="large" color="primary" />,
    title: "+ 500 Practitioners",
    description:
      "CBP has a strong network of over 500 physiotherapists/chiropractors enrolled through a structured empanelment criterion.",
  },
  {
    icon: <Hub fontSize="large" color="primary" />,
    title: "Integrated Approach",
    description:
      "Our integrated / multi-therapy approach enables us take a holistic view of patient needs and provide an outcome-based treatment.",
  },
  {
    icon: <EventAvailable fontSize="large" color="primary" />,
    title: "Treatment scheduling",
    description:
      "Instant confirmation of clinic appointment & home visit is confirmed within 30 mins. We try our best to not change a physio for ongoing treatments.",
  },
  {
    icon: <HeadsetMic fontSize="large" color="primary" />,
    title: "Always Listening",
    description:
      "Continuous monitoring of treatment progress with feedback & counseling calls. Pro-active grievance redressal to ensure a smooth path to your recovery.",
  },
  {
    icon: <CreditCard fontSize="large" color="primary" />,
    title: "Payments",
    description:
      "Transparent pricing with friendly packages for long-term treatments. Option to pay through cash, card or online with insurance reimbursement-friendly billing.",
  },
  {
    icon: <ChatBubbleOutline fontSize="large" color="primary" />,
    title: "12*7 Support",
    description:
      "Help is just a text away. 12*7 support on WhatsApp for any query or concern for your new appointment or for an ongoing physio treatment.",
  },
];

const WhyChooseCBP = () => {
  return (
    <Box sx={{ bgcolor: "#f9fafb", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Why Choose CB Physiotherapy
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Treatment that blends Competence with Compassion
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 3,
                }}
              >
                <Box mb={2}>{feature.icon}</Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseCBP;
