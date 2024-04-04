<script setup lang="ts">
import { computed } from 'vue';
import NumberSlider from '@/components/NumberSlider.vue';
import Tooltip from '@/components/Tooltip.vue';
import { getPolicyStore } from '@/stores/policies';
import { getClassStore } from '@/stores/classes';

const { incomeTax } = getPolicyStore();
const { population } = getClassStore();

const wIncomeTax = computed(() => incomeTax.value * population.value);
</script>

<template>
    <div class="working-class card">
        <h3>{{ $t('header.workingclass') }}</h3>
        <div class="split">
            <Tooltip :text="$t('hint.worker.incomeTax')">
                <div class="parameter-icon icon-workers" />
            </Tooltip>
            <div>
                <NumberSlider :min="3" :max="10" v-model.number="population" />
            </div>
        </div>

        <TaxFormula class="no-select">
            <div class="detailed-content">
                <div class="label-group no-break">
                    <div class="label-group-content">
                        {{ incomeTax }}<vardis /> &times; {{ population }} &equals; {{ wIncomeTax }}<vardis />
                    </div>
                    <div class="label-group-label">{{ $t('taxes.income') }}</div>
                </div>

                <span class="formula-separator">&rArr;&nbsp;</span>
            </div>

            <span class="formula-result">{{ wIncomeTax }}<vardis /></span>
        </TaxFormula>
    </div>
</template>

<style lang="scss">
.working-class {
    background-color: #df0231;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;

    .working-class-logo {
        padding: 0 0.5em 0 0;
        text-align: center;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
