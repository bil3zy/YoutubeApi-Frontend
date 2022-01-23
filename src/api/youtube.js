import axios from "axios";

const KEY = "AIzaSyDSkAdky4EGiUz3Db_g7PHrHTImC5fH1wQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
