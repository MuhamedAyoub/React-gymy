import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Stack, Box, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { fetchData, exerciseOptions } from "../utls/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  useEffect(() => {
    const seterData = async () => {
      const url =
        bodyPart === "All"
          ? "https://exercisedb.p.rapidapi.com/exercises"
          : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
      const specialData = await fetchData(url, exerciseOptions);
      setExercises(specialData);
    };
    seterData();
  }, [bodyPart]);
  const [currentPage, setPage] = useState(1);
  const pageSize = 9;
  const handlePaginate = (evn, val) => {
    setPage(val);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  const indexLastItem = pageSize * currentPage;
  const indexFirstItem = indexLastItem - pageSize;
  const currentItems = exercises.slice(indexFirstItem, indexLastItem);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Resules
      </Typography>
      <Stack
        direction="row-reverse"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentItems.map((exercise, index) => (
          <ExerciseCard key={index} item={exercise} />
        ))}
      </Stack>
      {exercises.length > 9 && (
        <Pagination
          className="pagination"
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / pageSize)}
          page={currentPage}
          onChange={handlePaginate}
        />
      )}
    </Box>
  );
};
export default Exercises;
