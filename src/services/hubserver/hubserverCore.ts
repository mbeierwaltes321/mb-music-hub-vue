import { useDialogStore } from "@/stores/dialogStore";
import axios, { AxiosError, HttpStatusCode, isAxiosError, type AxiosInstance, type AxiosInterceptorOptions, type AxiosRequestConfig, type AxiosResponse } from "axios";
import router from "@/plugins/router";
import type { HubserverServiceResponse } from "@/models/common/hubserverServiceResponse";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.DEV ? "http://127.0.0.1:8080/api/" : "prod_url",
    timeout: 5000,
    allowAbsoluteUrls: false,
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

/**
 * Performs a GET request towards the MB Music Hub server
 * @param url The Hubserver URL to perform the GET request towards
 * @param queryParms The query parameters for performing the GET request
 * @returns A promise containing a {@link HubserverServiceResponse} containing the data and whether the request was successful or not
 */
export async function hubserverGET<T>(url: string, queryParms?: Object): Promise<HubserverServiceResponse<T>> {
    const requestConfig: AxiosRequestConfig = {
        url,
        method: "GET",
        params: queryParms,
    }

    try {
        const response = await axiosInstance.request<T>(requestConfig);

        return {
            data: response.data,
            success: true
        };
    } catch (error) {
        if (isAxiosError(error)) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        return {
            data: null,
            success: false
        };
    }
}

/**
 * Performs a DELETE request towards the MB Music Hub server
 * @param url The Hubserver URL to perform the DELETE request towards
 * @param queryParms The query parameters for performing the DELETE request
 * @returns A promise containing a {@link HubserverServiceResponse} containing the data and whether the request was successful or not
 */
export async function hubserverDELETE<T>(url: string, queryParms?: Object): Promise<HubserverServiceResponse<T>> {
    const requestConfig: AxiosRequestConfig = {
        url,
        method: "DELETE",
        params: queryParms,
    }

    try {
        const response = await axiosInstance.request<T>(requestConfig);

        return {
            data: response.data,
            success: true
        };
    } catch (error) {
        if (isAxiosError(error)) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        return {
            data: null,
            success: false
        };
    }
}


/**
 * Performs a POST request towards the MB Music Hub server
 * @param url The Hubserver URL to perform the POST request towards
 * @param body The request body for performing the POST request
 * @returns A promise containing a {@link HubserverServiceResponse} containing the data and whether the request was successful or not
 */
export async function hubserverPOST<T>(url: string, body?: Object): Promise<HubserverServiceResponse<T>> {
    const requestConfig: AxiosRequestConfig = {
        url,
        method: "POST",
        data: body
    };

    try {
        const response = await axiosInstance.request<T>(requestConfig);

        return {
            data: response.data,
            success: true
        };
    } catch (error) {
        if (isAxiosError(error)) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        return {
            data: null,
            success: false
        };
    }
}

/**
 * Performs a PUT request towards the MB Music Hub server
 * @param url The Hubserver URL to perform the PUT request towards
 * @param body The request body for performing the PUT request
 * @returns A promise containing a {@link HubserverServiceResponse} containing the data and whether the request was successful or not
 */
export async function hubserverPUT<T>(url: string, body?: Object): Promise<HubserverServiceResponse<T>> {
    const requestConfig: AxiosRequestConfig = {
        url,
        method: "PUT",
        data: body
    };

    try {
        const response = await axiosInstance.request<T>(requestConfig);

        return {
            data: response.data,
            success: true
        };
    } catch (error) {
        if (isAxiosError(error)) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        return {
            data: null,
            success: false
        };
    }
}