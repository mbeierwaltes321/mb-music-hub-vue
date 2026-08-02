import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.DEV ? "http://127.0.0.1:8080/api/" : "prod_url",
    timeout: 5000,
    withCredentials: true //TODO - Check that the backend follows these recommendations: https://axios.rest/pages/advanced/authentication.html#cookie-based-authentication
});
