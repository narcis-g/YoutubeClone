import { useState, useEffect } from "react";
import { Bolt, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI} from "../utilities/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]); //this means it's gonna recall this function whenever we change a category

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}></Videos>
    </Box>
  );
};

export default SearchFeed;
