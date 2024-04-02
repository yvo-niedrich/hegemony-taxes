import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

export const usePolicyStore = defineStore('policies', () => {
    const fiscal = useStorage('policies.fiscal', 2);
    const labor = useStorage('policies.labor', 1);
    const tax = useStorage('policies.tax', 0);
    const health = useStorage('policies.health', 1);
    const education = useStorage('policies.education', 2);

    const taxMultiplier = computed(
        () =>
            3 - tax.value + Math.abs(health.value - 2) * Math.abs(tax.value - 2) + Math.abs(education.value - 2) * Math.abs(tax.value - 2),
    );
    const incomeTax = computed(
        () =>
            [
                [7, 6, 5],
                [4, 4, 4],
                [1, 2, 3],
            ][Number(labor.value)][Number(tax.value)],
    );

    function $reset() {
        fiscal.value = 2;
        labor.value = 1;
        tax.value = 0;
        health.value = 1;
        education.value = 2;
    }

    return {
        fiscal,
        labor,
        tax,
        health,
        education,
        taxMultiplier,
        incomeTax,
        $reset,
    };
});

export const getPolicyStore = () => {
    const store = usePolicyStore();
    return { store, ...storeToRefs(store) };
};
