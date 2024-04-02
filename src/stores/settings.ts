import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
    const language = useStorage('settings.language', 'en');
    const showFormula = useStorage('settings.showFormula', false);

    function $reset(full = false) {
        showFormula.value = false;
        if (full) language.value = 'en';
    }

    return {
        language,
        showFormula,
        $reset,
    };
});

export const getSettingsStore = () => {
    const store = useSettingsStore();
    return { store, ...storeToRefs(store) };
};
