<script setup lang="ts">

import { VContainer, VRow, VCol, VImg } from 'vuetify/components';
import gitHubIconPath from "@/assets/github-mark-white.svg";
import linkedInIconPath from "@/assets/LI-In-Bug.png";
import spotifyIconPath from "@/assets/Spotify_Icon_RGB_White.png";

interface FooterLinkData {
    text: string,
    link: string,
    last?: boolean,
    first?: boolean
}

interface FoooterIconData {
    id: string,
    path: string,
    width: string,
    length: string,
    link: string
}

const imgProperties: FoooterIconData[] = [
    { 
        id: "logo-github", 
        path: gitHubIconPath, 
        width: "50px", 
        length: "50px", 
        link: "https://github.com/mbeierwaltes321"
    },
    { 
        id: "logo-spotify", 
        path: spotifyIconPath, 
        width: "50px", 
        length: "50px", 
        link: "https://open.spotify.com/user/1256937600?si=2b4a04ed6d3e4ac7"
    },
    { 
        id: "logo-linkedin", 
        path: linkedInIconPath, 
        width: "50px", 
        length: "58.7963px", 
        link: "https://www.linkedin.com/in/michael-beierwaltes-703a93172"
    },
]

const footerLinks: FooterLinkData[] = [
    //TODO Fill these with links for eventual routing
    {
        text: "About Me",
        link: "",
        first: true
    },
    {
        text: "Terms & Conditions",
        link: ""
    },
]

</script>

<template>
    <v-footer app
        border
        absolute
        color="rgb(75, 0, 0)"
    >
        <v-container>
            <v-row justify="center">
                <v-col cols="auto"> 
                    <div class="d-flex align-center">
                        <a v-for="imgProp in imgProperties" :href="imgProp.link">
                            <v-img v-if="imgProp.path != ''"
                                :id="imgProp.id"
                                class="mx-6"
                                :src="imgProp.path"
                                :height="imgProp.length"
                                :width="imgProp.width"
                            />
                        </a>
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col v-for="footerLink in footerLinks" cols="auto">
                    <div class="d-flex justify-center">
                        <a :href="footerLink.link" class="text-cyan-accent-3">
                            {{ footerLink.text }}
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>

</style>