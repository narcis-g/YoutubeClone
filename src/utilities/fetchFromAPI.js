import axios from "axios";

//500 entries a day
const base_URL = "https://youtube-v31.p.rapidapi.com/captions";

const options = {
  url: base_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${base_URL}/${url}`, options);
  return data;
};
