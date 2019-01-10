import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 50ce2fdc20d5d8824690275faa8a56ba37c56b2247aba8ad6dcd2c0f021cb90c"
  }
});
