<script setup lang="ts">
import { VApp, VAppBar, VMain, VFooter } from 'vuetify/components';
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import { RouterView, useRouter } from 'vue-router';
import PageLoad from '../common/PageLoad.vue';
import { useAppStateStore } from '@/stores/appStateStore.ts';

const router = useRouter();
const appState = useAppStateStore();

</script>

<template>
    <v-app>
        <AppHeader />
        <v-main>
            <RouterView></RouterView>
        </v-main>
        <AppFooter/>    
    </v-app>
    <PageLoad v-model:is-active="appState.isLoading"/>
</template>

<style scoped>

</style>