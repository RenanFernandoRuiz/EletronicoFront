import axios from "axios";

const api = axios.create({
    baseURL: "hhtps://localhost:5000"
});

export default api;