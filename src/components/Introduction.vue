<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { VBtn, VImg, VContainer, VRow, VCol } from 'vuetify/components';
import SpotifyLogo from "@/assets/Spotify_Logo_RGB_White.png";

const router = useRouter();

/**
 * This function will navigate the user to the main layout, which contains the home page
 */
function navigateToMainLayout() {
    //Set the visited storage item to false
    localStorage.setItem("firstVisit", "false");

    router.push({name: "home"});
}

</script>

<template>
    <div class="app-intro">
        <v-container>
            <v-row justify="center">
                <v-col cols="auto">
                    <!--TODO - Make font better-->
                    <div class="fade-first text-h3 text-white">Hi! 👋</div>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="auto">
                    <div class="fade-second text-h4 text-center text-white">Welcome to MB's Music Hub!</div>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="auto">
                    <div class="fade-third text-h5 text-white">Powered By:</div>
                </v-col>
                <v-col cols="auto">
                    <v-img class="fade-third"
                        width="13.36em"
                        height="4em"
                        :src="SpotifyLogo" 
                    />
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="auto">
                    <v-btn class="fade-fourth"
                        size="x-large"
                        @click="navigateToMainLayout"
                        color="blue-darken-1">
                        Let's go!
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
/* Set up fadeIn CSS so that the text fades in */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fade-first {
    animation: fadeIn 1s;
}

.fade-second {
    animation: fadeIn 1.5s;
    font-family: 'Abyssinica SIL';
}

.fade-third {
    animation: fadeIn 2s;
}

.fade-fourth {
    animation: fadeIn 3.5s;
}

.app-intro {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(111,0,0,1) 50%);
    height: 100vh;
}

</style>