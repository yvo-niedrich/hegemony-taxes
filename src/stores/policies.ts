import { defineStore, storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useStorage } from '@vueuse/core';

export const usePolicyStore = defineStore('policies', {
    state: () => {
        return useStorage('policies', {
            fiscal: 2,
            labor: 1,
            tax: 0,
            health: 1,
            education: 2,
        });
    },
    getters: {
        taxMultiplier: (state) =>
            3 - state.tax + Math.abs(state.health - 2) * Math.abs(state.tax - 2) + Math.abs(state.education - 2) * Math.abs(state.tax - 2),
        incomeTax: (state) =>
            [
                [7, 6, 5],
                [4, 4, 4],
                [1, 2, 3],
            ][state.labor][state.tax],
    },
});

export const getPolicyStore = () => {
    const store = usePolicyStore();
    return { store, ...storeToRefs(store) };
};
