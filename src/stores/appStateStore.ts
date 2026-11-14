import { getSpotifyUserInfo } from "@/services/hubserver/spotifyUserService";
import { checkIfUserLoggedIn } from "@/utilities/localStorage";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAppStateStore = defineStore("appState", () => {
    const isLoading: Ref<boolean> = ref(false);
    const isUserLoggedIn: Ref<boolean> = ref(false);

    function setAppLoading(loading: boolean) {
        isLoading.value = loading;
    }

    async function setUserLoggedIn() {
        isUserLoggedIn.value = await checkIfUserLoggedIn();
    }

    async function loadUserInfo() {
        if (!isUserLoggedIn.value) {
            return;
        }

        isLoading.value = true;
        const result = await getSpotifyUserInfo()
        if (!result.success || !result.data) {
            isLoading.value = false;
            console.error("There was an error getting the Spotify User's info");
            return;
        }

        result.data
    }

    return {isLoading, setAppLoading, isUserLoggedIn};
});