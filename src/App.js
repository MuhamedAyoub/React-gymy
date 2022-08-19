import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Box } from "@mui/material";
// Start ---- -- import files
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/footer";
// End ---- -- import files

const App = () => {
  return (
    <Router>
      <Box width="400px" m="auto" sx={{ width: { x1: "1488px" } }}>
        <NavBar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ExerciseDetail />} />
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
