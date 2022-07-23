import axios from "axios";

export const axiosRequest = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 30000,
    withCredentials: false,
});
