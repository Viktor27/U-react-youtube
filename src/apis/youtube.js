import axios from "axios";
const KEY = "AIzaSyC7tOONKbgNM8GG44pCNp6lf5x1soEWBfk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
