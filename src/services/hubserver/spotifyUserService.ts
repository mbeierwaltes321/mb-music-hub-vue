import { type GetSpotifyUserInfo } from "@/models/DTOs/GetSpotifyUserInfo";
import { hubserverGET } from "./hubserverCore";
import type { HubserverServiceResponse } from "@/models/common/hubserverServiceResponse";

export async function getSpotifyUserInfo(): Promise<HubserverServiceResponse<GetSpotifyUserInfo>> {
    return hubserverGET<GetSpotifyUserInfo>("spotify-users/info");
}