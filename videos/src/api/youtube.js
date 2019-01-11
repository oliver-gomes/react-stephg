import axios from "axios";

const KEY = "AIzaSyD1bKTH5zOCvugiS9xt_4XR0R35yBC0odE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
