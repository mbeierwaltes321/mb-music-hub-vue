import type { GetSpotifyUserInfo } from "@/models/DTOs/GetSpotifyUserInfo";
import { getSpotifyUserInfo } from "@/services/hubserver/spotifyUserService";
import { checkIfUserLoggedIn } from "@/utilities/localStorage";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAppStateStore = defineStore("appState", () => {
    const isLoading: Ref<boolean> = ref(false);
    const isUserLoggedIn: Ref<boolean> = ref(false);
    const spotifyUserInfo: Ref<GetSpotifyUserInfo | null> = ref(null);

    function setAppLoading(loading: boolean) {
        isLoading.value = loading;
    }

    async function updateUserLoggedIn() {
        isUserLoggedIn.value = await checkIfUserLoggedIn();
    }

    async function loadUserInfo() {
        if (!isUserLoggedIn.value) {
            return;
        }

        const result = await getSpotifyUserInfo()
        if (!result.success || !result.data) {
            console.error("There was an error getting the Spotify User's info");
            return;
        }

        spotifyUserInfo.value = result.data;
    }

    return {
        isLoading, 
        setAppLoading, 
        isUserLoggedIn, 
        updateUserLoggedIn, 
        loadUserInfo,
        spotifyUserInfo
    };
});