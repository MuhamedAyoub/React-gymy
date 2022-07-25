import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utls/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import Details from "../components/Details";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetail = () => {
  const [dataDetails, setDataDetails] = useState({});
  const [dataVideo, setVideo] = useState([]);
  const { id } = useParams();
  const [targetDatas, setTarget] = useState([]);
  const [equipmentDatas, setEquipment] = useState([]);

  useEffect(() => {
    const fetchDataDetails = async () => {
      const dataDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const dataDetail = await fetchData(
        `${dataDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setDataDetails(dataDetail);
      const videoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${dataDetail.name}`,
        youtubeOptions
      );
      setVideo(videoData.contents);
      const targeData = await fetchData(
        `${dataDbUrl}/exercises/target/${dataDetail.target}`,
        exerciseOptions
      );
      setTarget(targeData);
      const equipmentData = await fetchData(
        `${dataDbUrl}/exercises/equipment/${dataDetail.equipment}`,
        exerciseOptions
      );
      setEquipment(equipmentData);
    };

    fetchDataDetails();
  }, [id]);
  return (
    <Box>
      <Details dataDetails={dataDetails} />
      <ExerciseVideos dataVideo={dataVideo} name={dataDetails.name} />
      <SimilarExercises target={targetDatas} equipment={equipmentDatas} />
    </Box>
  );
};

export default ExerciseDetail;
