<script setup lang="ts">
import { DialogType } from '@/models/Enums/DialogType';
import { useDialogStore, type DialogConfig } from '@/stores/dialogStore';
import { storeToRefs } from 'pinia';
import { VDialog } from 'vuetify/components';
import { VCard } from 'vuetify/components';
import { VBtn } from 'vuetify/components';


const dialogStore = useDialogStore();
const { activeDialogs } = storeToRefs(dialogStore);

function confirmResponse(dialog: DialogConfig, confirmed: boolean) {
    dialog.close(confirmed);
    closeDialog(dialog);
}

function dismissAlert(dialog: DialogConfig) {
    dialog.close();
    closeDialog(dialog);
}

function closeDialog(dialog: DialogConfig) {
    const dialogIndex = activeDialogs.value.indexOf(dialog);
    if (dialogIndex === -1) {
        return;
    }

    activeDialogs.value.splice(dialogIndex, 1);
    activeDialogs.value.pop();
}

</script>

<template>
    <v-dialog v-for="dialog in activeDialogs"
        v-model="dialog.isActive"
        height="auto"
        width="auto"
    >
        <v-card v-if="dialog.dialogType == DialogType.Confirm"
            :title="dialog.title"
            :text="dialog.text"
        >
            <template #actions>
                <v-btn text="Yes"
                    @click="() => confirmResponse(dialog, true)"
                />
                <v-btn text="No"
                    @click="() => confirmResponse(dialog, false)"
                />
            </template>
        </v-card>
        <v-card v-else
            :title="dialog.title"
            :text="dialog.text"
        >
            <template #actions>
                <v-btn text="OK"
                    @click="() => dismissAlert(dialog)"
                />
            </template>
        </v-card>
    </v-dialog>

</template>