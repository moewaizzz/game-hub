import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "033b48a63821470abf6d437a75b31111",
  },
});
