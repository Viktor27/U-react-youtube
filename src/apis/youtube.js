import axios from "axios";
const KEY = "AIzaSyDxLwaM6ee3BFP9ynmxsHNDMgd6uXtk0Ac";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
