import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/searchExercises";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("All");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
