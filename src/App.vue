<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { VDialog } from 'vuetify/components';
import { VCard } from 'vuetify/components';
import GlobalDialog from './components/dialog/GlobalDialog.vue';

const router = useRouter();

const isDialogActive = ref<boolean>(false);

onBeforeMount(() => {
    //Default the user to the intro page if it's their first time visitng
    if (localStorage.getItem("firstVisit") === "true") {
        router.replace({name: "introduction"});
    }
})

</script>

<template>
    <RouterView></RouterView>
    <GlobalDialog />
</template>
