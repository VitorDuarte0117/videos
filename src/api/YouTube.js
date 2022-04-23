import axios from "axios";

const KEY = "AIzaSyCxpfO7g1fZ_8rL-xypQdRSK87SWV-MqEA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 10,
        key: KEY,
    },
});
