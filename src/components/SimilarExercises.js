import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./commum/Loader";
const SimilarExercises = ({ target, equipment }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3">
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          mt: "100px",
          p: "10px",
          position: "relative",
        }}
      >
        {target.length !== 0 ? (
          <HorizontalScrollbar data={target} isBodyPart={false} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3">Exercises that have same Equipment</Typography>
      <Stack
        direction="row"
        sx={{
          mt: "100px",
          p: "10px",
          position: "relative",
        }}
      >
        {equipment.length !== 0 ? (
          <HorizontalScrollbar data={equipment} isBodyPart={false} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
