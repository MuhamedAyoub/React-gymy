import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" pt="24px" px="40px" alignItems="center">
        <img src={Logo} alt="Footer" width="200px" />
        <Typography>Made width Love by MohamedAyoub</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
