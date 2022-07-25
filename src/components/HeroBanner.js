import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/main.jpeg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#078A88" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="35px"
        mt="22px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography lineHeight="35px" mb={3} fontSize="22px">
        check out most effective exercises
      </Typography>
      <Typography
        fontWeight={600}
        sx={{
          opacity: 0.4,

          display: {
            lg: "block",
            xs: "none",
          },
        }}
        fontSize="200px"
        color="#74D6D5"
      >
        Exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        color="primary"
        sx={{ backgroundColor: "#078A88", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <img src={HeroBannerImage} className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
