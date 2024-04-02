<script setup lang="ts">
import { defineComponent } from 'vue';
import NumberSlider from '@/components/NumberSlider.vue';
import { getPolicyStore } from '@/stores/policies';
import { getClassStore } from '@/stores/classes';

const { incomeTax } = getPolicyStore();
const { population } = getClassStore();
</script>

<template>
    <div class="working-class card">
        <h3>{{ $t('header.workingclass') }}</h3>
        <div class="split">
            <div class="parameter-icon icon-workers" />
            <div>
                <NumberSlider :min="3" :max="10" v-model.number="population" />
            </div>
        </div>

        <TaxFormula class="no-select">
            <div class="detailed-content">
                <div class="label-group no-break">
                    <div class="label-group-content">{{ incomeTax }}¥ &times; {{ population }} &equals; {{ incomeTax * population }}¥</div>
                    <div class="label-group-label">{{ $t('taxes.income') }}</div>
                </div>

                <span class="formula-separator">&rArr;&nbsp;</span>
            </div>

            <span class="formula-result">{{ population * incomeTax }}¥</span>
        </TaxFormula>
    </div>
</template>

<style scoped>
h3 {
    margin: 0 0 0.6em 0;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
}
</style>

<style>
.working-class {
    background-color: #df0231;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;
}

.working-class-logo {
    padding: 0 0.5em 0 0;
    text-align: center;
}
</style>

<script lang="ts">
export default defineComponent({});
</script>
