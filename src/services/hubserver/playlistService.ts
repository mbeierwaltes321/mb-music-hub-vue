import { HttpStatusCode, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { hubserverGET } from "./hubserverCore";

export function usePlaylistService() {

    /**
     * This function will retrieve playlists for the currently logged in user
     */
    async function getUserPlaylists() {
        //TODO - Implement this once the return DTO has been properly set in in the backend server
        return await hubserverGET("playlists/spotify-playlists");
    }

    return { getUserPlaylists };
}