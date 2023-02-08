import { useState, useEffect } from "react";
import { Bolt, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromApi } from "../utilities/fetchFromAPI";

const Feed = () => {
  useEffect(() => {}, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar></SideBar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ marginTop: 1.5, color: "#fff" }}
        >
          Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          New <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
