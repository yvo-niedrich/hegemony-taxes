import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useClassStore = defineStore('classes', () => {
    const population = useStorage('classes.population', 3);
    const mBusinesses = useStorage('classes.mBusinesses', 2);
    const mEmployments = useStorage('classes.mEmployments', 4);
    const cIncome = useStorage('classes.cIncome', 120);
    const cBusinesses = useStorage('classes.cBusinesses', 3);

    function $reset() {
        population.value = 3;
        mBusinesses.value = 2;
        mEmployments.value = 3;
        cIncome.value = 120;
        cBusinesses.value = 3;
    }

    return {
        population,
        mBusinesses,
        mEmployments,
        cIncome,
        cBusinesses,
        $reset,
    };
});

export const getClassStore = () => {
    const store = useClassStore();
    return { store, ...storeToRefs(store) };
};
