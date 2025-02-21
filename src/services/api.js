import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; // Update when deploying */
console.log(`axios is on ${API_BASE_URL}`);

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
    },
});

export default api;