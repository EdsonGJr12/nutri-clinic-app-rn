import { AppError } from "@/utils/AppError";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.18.5:8080"
});

api.interceptors.response.use(response => {
    return response
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.detail));
    } else {
        return Promise.reject(error);
    }
});