<script setup lang="ts">
import PolicySlider from './components/PolicySlider.vue';
import TaxMultiplier from './components/TaxMultiplier.vue';
import Workerclass from './components/Workerclass.vue';
import { getPolicyStore } from '@/stores/policies';

const { fiscal, labor, tax, health, education, incomeTax } = getPolicyStore();
</script>

<template>
    <div class="container">
        <div class="column">
            <div class="policy-wrapper">
                <PolicySlider v-model="fiscal" policy="fiscal" />
                <PolicySlider v-model="labor" policy="labor" />
                <PolicySlider v-model="tax" policy="tax" />
                <PolicySlider v-model="health" policy="health" />
                <PolicySlider v-model="education" policy="education" />
            </div>
            <div>
                <TaxMultiplier />
            </div>
            <div>Income Tax {{ incomeTax }}</div>
        </div>
        <div class="column">
            <Workerclass />
        </div>
    </div>
</template>

<style scoped></style>
