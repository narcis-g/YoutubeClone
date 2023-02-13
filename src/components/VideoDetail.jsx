import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Video } from "./";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

const VideoDetail = () => {

  const {id}=useParams()
  const [videoDetail, setVideoDetail]=useState(null)

  useEffect(() => {
     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
       .then((data)=> setVideoDetail(data.items[0]))
  },[id])

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position:'sticky', top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls></ReactPlayer>
          </Box>
        </Box>
      </Stack>

    </Box>
  )
};

export default VideoDetail;
