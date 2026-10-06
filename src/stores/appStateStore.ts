import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAppStateStore = defineStore("appState", () => {
    const isLoading: Ref<boolean> = ref(false);

    function setAppLoading(loading: boolean) {
        isLoading.value = loading;
    }

    return {isLoading, setAppLoading};
});