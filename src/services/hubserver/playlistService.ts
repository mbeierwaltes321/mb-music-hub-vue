import { HttpStatusCode, type AxiosRequestConfig, type AxiosResponse } from "axios";
import axiosInstance from "./axiosConfig";


export function usePlaylistService() {

    /**
     * This function will retrieve playlists for the currently logged in user
     */
    async function getUserPlaylists() {
        const response = await axiosInstance.get("playlists/spotify-playlists");

        if (response.status != HttpStatusCode.Ok) {
            console.error("Something went wrong");
            return;
        }

        console.log(response.data);
    }

    return { getUserPlaylists };
}