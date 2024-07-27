<script setup lang="ts">
import PolicySlider from '@/components/PolicySlider.vue';
import WorkerClass from '@/components/WorkerClass.vue';
import MiddleClass from '@/components/MiddleClass.vue';
import capitalist from '@/components/CapitalistClass.vue';
import SettingsBar from '@/components/SettingsBar.vue';
import TaxMultiplier from './components/TaxMultiplier.vue';
</script>

<template>
    <div>
        <div class="container floating-multiplier">
            <div class="column policy-wrapper">
                <TaxMultiplier />
                <PolicySlider policy="fiscal" />
                <PolicySlider policy="labor" />
                <PolicySlider policy="tax" />
                <PolicySlider policy="health" />
                <PolicySlider policy="education" />
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
