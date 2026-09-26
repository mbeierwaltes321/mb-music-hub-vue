import { useDialogStore } from "@/stores/dialogStore";
import axios, { AxiosError, HttpStatusCode, type AxiosInstance, type AxiosInterceptorOptions } from "axios";
import router from "@/plugins/router";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.DEV ? "http://127.0.0.1:8080/api/" : "prod_url",
    timeout: 5000,
    withCredentials: true //TODO - Check that the backend follows these recommendations: https://axios.rest/pages/advanced/authentication.html#cookie-based-authentication
});

axiosInstance.interceptors.response.use(
    null,
    async (error: AxiosError) => {
        console.error(error);
        if (error.status === HttpStatusCode.Unauthorized) {
            const {confirmDialog} = useDialogStore();
            
            const loginAgain = await confirmDialog("Authentication Error",
                "There was an error authenticating you. Please log in again to proceed.");

            if (!loginAgain) {
                router.replace({path: "/"});
            } else {
                const loginUrl = import.meta.env.DEV ? "http://127.0.0.1:8080/api/conn/spotifylogin" : "prod_url";
                const frontEndQuery = `?frontendState=${encodeURIComponent(router.currentRoute.value.fullPath)}`;
                window.location.href = loginUrl + frontEndQuery;
            }
        }

        return Promise.reject(error);
    }
)

export default axiosInstance