import { DialogType } from "@/models/Enums/DialogType";
import { defineStore, type Store } from "pinia";
import { ref, type Ref } from "vue";

export interface DialogConfig {
    isActive: boolean,
    title: string,
    text: string,
    dialogType: DialogType,
    close: Function
}

/**
 * This store handles displaying a global dialog to the user
 */
export const useDialogStore = defineStore("dialogs", () => {
    const activeDialogs: Ref<DialogConfig[]> = ref([]);

    /**
     * Displays an alert to the user
     * @param titleMessage What's displayed in the title of the dialog
     * @param message What's displayed in the message of the dialog
     */
    async function alertDialog(titleMessage: string, message: string) {
        const alertPromise = new Promise((resolve) => {
            const alertDialog: DialogConfig = {
                isActive: true,
                title: titleMessage,
                text: message,
                dialogType: DialogType.Alert,
                close: resolve
            };

            activeDialogs.value.push(alertDialog);
        });

        await alertPromise;
    }

    /**
     * Displays a confirmation dialog to get a response from the user
     * @param titleMessage What's displayed in the title of the dialog
     * @param message What's displayed in the message of the dialog
     * @returns True if the user says yes. False otherwise.
     */
    async function confirmDialog(titleMessage: string, message: string) {
        const confirmPromise = new Promise<boolean>((resolve) => {
            const confirmDialog: DialogConfig = {
                isActive: true,
                title: titleMessage,
                text: message,
                dialogType: DialogType.Confirm,
                close: resolve
            };

            activeDialogs.value.push(confirmDialog);
        });

        return await confirmPromise;
    }

    return {
        activeDialogs,
        alertDialog,
        confirmDialog
    };
});