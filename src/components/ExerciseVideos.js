import React from "react";
import { Typography, Box, Stack } from "@mui/material";
const ExerciseVideos = ({ dataVideo, name }) => {
  if (!dataVideo) return "Loading ...";
  else
    return (
      <Box
        sx={{
          marginTop: { lg: "200px", xs: "20px" },
        }}
        p="20px"
      >
        <Typography variant="h3" mb="33px">
          Watch{" "}
          <span style={{ color: "#ff2325", textTransform: "capitalize" }}>
            {name}
          </span>
          exercises videos
        </Typography>
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{
            flexDirection: { lg: "row" },
            gap: { lg: "100px", xs: "0" },
          }}
        >
          {dataVideo?.slice(0, 3).map((item, index) => (
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </a>
          ))}
        </Stack>
      </Box>
    );
};

export default ExerciseVideos;
