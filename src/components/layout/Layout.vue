<script setup lang="ts">
import { VApp, VMain } from 'vuetify/components';
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import { RouterView } from 'vue-router';
import PageLoad from '../common/PageLoad.vue';
import { useAppStateStore } from '@/stores/appStateStore.ts';
import { storeToRefs } from 'pinia';

const appStateStore = useAppStateStore();

const {isLoading} = storeToRefs(appStateStore);

</script>

<template>
    <v-app>
        <AppHeader />
        <v-main>
            <RouterView></RouterView>
        </v-main>
        <AppFooter/>    
    </v-app>
    <PageLoad v-model:is-active="isLoading"/>
</template>

<style scoped>

</style>