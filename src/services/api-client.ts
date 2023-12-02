import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0bbf828760164d16911c1bd4c3c907af",
  },
});
