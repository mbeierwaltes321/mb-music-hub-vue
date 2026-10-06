<script setup lang="ts">
import { VOverlay, VProgressCircular } from 'vuetify/components';

const isActive = defineModel<boolean>("isActive", { required: true });

</script>

<template>
    <v-overlay v-model="isActive"
        :opacity="100">
        <v-progress-circular color="red-lighten-1"
            :indeterminate="true"
        />
    </v-overlay>
</template>