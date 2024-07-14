import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
    const language = useStorage('settings.language', 'en');
    const showFormula = useStorage('settings.showFormula', false);
    const showTaxMultiplier = useStorage('settings.showMultiplier', false);

    function $reset(full = false) {
        showFormula.value = false;
        showTaxMultiplier.value = false;
        if (full) language.value = 'en';
    }

    return {
        language,
        showFormula,
        showTaxMultiplier,
        $reset,
    };
});

export const getSettingsStore = () => {
    const store = useSettingsStore();
    return { store, ...storeToRefs(store) };
};
