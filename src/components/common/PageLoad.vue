<script setup lang="ts">
import { VOverlay, VProgressCircular } from 'vuetify/components';

const isActive = defineModel<boolean>("isActive", { required: true });

</script>

<template>
    <v-overlay v-model="isActive"
        :opacity="100"
        class="d-flex justify-center align-center"
        >
            <v-progress-circular color="red-lighten-1"
                :indeterminate="true"
                :size="80"
                :width="7"
            />
    </v-overlay>
</template>