import axios from "axios";

const KEY = "AIzaSyDT3daN-U_6QcZrGgmL1ys2f9NUEFtEIJQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
