<script setup lang="ts">
import PolicySlider from '@/components/PolicySlider.vue';
import WorkerClass from '@/components/WorkerClass.vue';
import MiddleClass from '@/components/MiddleClass.vue';
import CapitalistClass from '@/components/CapitalistClass.vue';
import Settings from '@/components/Settings.vue';
import { getPolicyStore } from '@/stores/policies';

const { fiscal, labor, tax, health, education } = getPolicyStore();
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
        </div>
        <div class="column">
            <WorkerClass />
            <MiddleClass />
            <CapitalistClass />
        </div>
    </div>
    <Settings />
</template>

<style scoped></style>
