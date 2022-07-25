import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// api import
import { fetchData, exerciseOptions } from "../utls/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // -----> Start  useState
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // -----> End  useState
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyParts = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["All", ...bodyParts]);
    };
    fetchExerciseData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const ExerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(ExerciseData);
      const searchExercises = ExerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      setExercises(searchExercises);
      setSearch("");
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercisers you should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
            },
            width: {
              lg: "850px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          htmlFor="searching"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2526",
            color: "white",
            textTransform: "none",
            width: {
              lg: "150px",
              xs: "80px",
            },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0", // concat
          }}
          onClick={handleSearch}
          id="searching"
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20%",
        }}
      >
        <HorizontalScrollbar
          isBodyPart={true}
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
/*



*/
