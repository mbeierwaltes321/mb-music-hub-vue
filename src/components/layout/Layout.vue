<script setup lang="ts">
import { VApp, VMain } from 'vuetify/components';
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import { RouterView } from 'vue-router';
import PageLoad from '../common/PageLoad.vue';
import { useAppStateStore } from '@/stores/appStateStore.ts';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted } from 'vue';

const appStateStore = useAppStateStore();

const {isLoading: appLoading} = storeToRefs(appStateStore);
const {updateUserLoggedIn, loadUserInfo} = appStateStore;

onBeforeMount(() => appLoading.value = true);

onMounted(async () => {
    try {
        await updateUserLoggedIn();
        await loadUserInfo();
    } finally {
        appLoading.value = false;
    }
});

</script>

<template>
    <v-app>
        <AppHeader />
        <v-main>
            <RouterView></RouterView>
        </v-main>
        <AppFooter/>
    </v-app>
    <PageLoad v-model:is-active="appLoading"/>
</template>

<style scoped>

</style>