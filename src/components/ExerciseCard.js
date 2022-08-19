import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
const itemCard = ({ item }) => (
  <Link className="item-card" to={`/item/${item.id}`}>
    <img src={item.gifUrl} alt={item.name} loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#ffa9a9",
          textTransform: "capitalize",
          fontSize: "14px",
          borderRadius: "20px",
          width: "120px",
        }}
      >
        {item.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#fcc757",
          textTransform: "capitalize",
          fontSize: "14px",
          borderRadius: "20px",
          width: "120px",
        }}
      >
        {item.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      mt="11px"
      pb="10px"
      textTransform="capitalize"
      fontWeight="bold"
    >
      {item.name}
    </Typography>
  </Link>
);

export default itemCard;
