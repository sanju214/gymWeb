import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../componenets/Exercises";
import SearchExercises from "../componenets/SearchExercises";
import HeroBanner from "../componenets/HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
