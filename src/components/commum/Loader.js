import React from "react";
import { Stack } from "@mui/material";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      sx={{ mt: "100px" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Circles color="gray" height={80} width={80} />
    </Stack>
  );
};

export default Loader;
