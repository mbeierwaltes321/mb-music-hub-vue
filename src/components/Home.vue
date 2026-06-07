<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';
import { VContainer, VCol, VRow, VCard, VCardText, VHover, VCarousel, VCarouselItem, VSheet, VDivider } from 'vuetify/components';

//Set the horizontal line depending on the color theme
const theme = useTheme();
const horizontalLineColor = ref(theme.global.current.value.dark ? "#8B8B00" : "#00008B");

/**
 * This function navigates the user to the youtube mixes component
 */
function navigateToYoutubeMixes() {
    alert("You clicked on the youtube mixes button!");
}

/**
 * This function navigates the user to the Spotify Playlists component
 */
function navigateToSpotifyPlaylists() {
    alert("You clicked on the Spotify Playlists button");
}

function navigateToPodcasts() {
    alert("You clicked on the podcasts button");
}

const tempWindowObjects = [
    {index: 0, podcastName: "Enciclopedia dei Videogiochi"},
    {index: 1, podcastName: "Conan O'Brien Needs a Friend"},
    {index: 2, podcastName: "Norah Jones Is Playing Along"},
    {index: 3, podcastName: "Italian Stories with Davide"},
    {index: 4, podcastName: "Gitbar - Italian developer podcast"}
]

watch(() => theme.global.current.value.dark, () => {
    horizontalLineColor.value = theme.global.current.value.dark ? "#8B8B00" : "#00008B";
});

</script>

<template>
    <v-container :fluid="true"
        class="p-0">
        <v-row justify="center"
            align="start"
        >
            <v-col cols="auto">
                <h1>Pick your experience</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="auto">
                <h2>Music</h2>
            </v-col>
        </v-row>
        <v-divider class="mb-8"
            :color="horizontalLineColor"
            :thickness="3" 
        />
        <v-row justify="space-around">
            <v-col cols="auto">
                <v-hover>
                    <template #default="{isHovering, props}">
                        <v-card title="YouTube Mixes"
                            v-bind="props"
                            :color="isHovering ? 'red-darken-4' : undefined"
                            @click="navigateToYoutubeMixes"
                            :max-width="225">
                            <v-card-text>
                                The music mixes I listen to while working!
                            </v-card-text>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
            <v-col cols="auto">
                <v-hover>
                    <template #default="{isHovering, props}">
                        <v-card title="Spotify Playlists"
                                v-bind="props"
                                :color="isHovering ? 'light-green-darken-1' : undefined"
                                @click="navigateToSpotifyPlaylists"
                                :max-width="225">
                            <v-card-text>
                                Browse the different playlists that I have created!
                            </v-card-text>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="auto">
                <h2>Podcasts</h2>
            </v-col>
        </v-row>
        <v-divider class="mb-8"
            :color="horizontalLineColor"
            :thickness="3" 
        />
        <v-row>
            <!--TODO: Maybe we can create the original idea of the podcasts scrolling using the transition classes-->
        </v-row>
    </v-container>
</template>

<style scoped>

</style>