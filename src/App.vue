<script setup lang="ts">
import PolicySlider from '@/components/PolicySlider.vue';
import WorkerClass from '@/components/WorkerClass.vue';
import MiddleClass from '@/components/MiddleClass.vue';
import capitalist from '@/components/CapitalistClass.vue';
import SettingsBar from '@/components/SettingsBar.vue';
import TaxMultiplier from './components/TaxMultiplier.vue';
import { getPolicyStore } from '@/stores/policies';
import { getSettingsStore } from '@/stores/settings';

const { fiscal, labor, tax, health, education } = getPolicyStore();
const { showTaxMultiplier } = getSettingsStore();
</script>

<template>
    <div>
        <div class="container">
            <div class="column policy-wrapper">
                <TaxMultiplier v-if="showTaxMultiplier" />
                <PolicySlider v-model="fiscal" policy="fiscal" />
                <PolicySlider v-model="labor" policy="labor" />
                <PolicySlider v-model="tax" policy="tax" />
                <PolicySlider v-model="health" policy="health" />
                <PolicySlider v-model="education" policy="education" />
            </div>
            <div class="column class-wrapper">
                <WorkerClass />
                <MiddleClass />
                <capitalist />
            </div>
        </div>
        <SettingsBar />
    </div>
</template>
