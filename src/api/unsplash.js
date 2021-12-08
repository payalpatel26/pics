import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jxXbOmvGe4QC0FfGs6z9417AGf5z_LlbmJxtYjcvwZw",
  },
});
