import { type GetSpotifyUserInfo } from "@/models/DTOs/GetSpotifyUserInfo";
import axiosInstance from "./axiosConfig"
import { HttpStatusCode } from "axios";

interface SpotifyUserService {
    getSpotifyUserInfo: () => Promise<GetSpotifyUserInfo | null>;
}

export function useSpotifyUserService() : SpotifyUserService {

    async function getSpotifyUserInfo(): Promise<GetSpotifyUserInfo | null> {
        const result = await axiosInstance.get<GetSpotifyUserInfo>("spotify-users/info");

        if (result.status != HttpStatusCode.Ok || !result.data) {
            console.error("There was an error: " + result.statusText);
            return null;
        }

        return result.data;
    }

    return {
        getSpotifyUserInfo
    }
}