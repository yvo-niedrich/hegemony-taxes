<script setup lang="ts">
import { getPolicyStore } from '@/stores/policies';
import { getClassStore } from '@/stores/classes';
import Tooltip from '@/components/Tooltip.vue';

const { tax, taxMultiplier } = getPolicyStore();
const { cBusinesses, cIncome } = getClassStore();

const corporateTaxTable = {
    4: [0, 0, 0],
    9: [1, 2, 2],
    24: [5, 5, 4],
    49: [12, 10, 7],
    99: [24, 15, 10],
    199: [40, 30, 20],
    299: [100, 70, 40],
    99999: [160, 120, 60],
};

function getCorporateTax(income: number, policy: number): number {
    for (const [key, value] of Object.entries(corporateTaxTable)) {
        if (income <= Number(key)) {
            return value[policy] ?? NaN;
        }
    }
    return NaN;
}

const employmentTax = computed(() => taxMultiplier.value * cBusinesses.value);
const corporateTax = computed(() => getCorporateTax(cIncome.value - employmentTax.value, tax.value));
</script>

<template>
    <div class="capitalist-class card">
        <h3>{{ $t('header.capitalist') }}</h3>

        <div class="capitalist-parameters">
            <div class="split">
                <Tooltip :text="$t('hint.capitalist.corporateTax')">
                    <div class="parameter-icon icon-income" />
                </Tooltip>
                <div class="capitalist-parameter parameter-income">
                    <NumberInput :min="0" :max="999" :intervalTimeout="40" v-model="cIncome" />
                </div>
            </div>
            <div class="split">
                <Tooltip :text="$t('hint.capitalist.employmentTax')">
                    <div class="parameter-icon icon-business-c" />
                </Tooltip>
                <div class="capitalist-parameter parameter-businesses">
                    <NumberInput :min="0" :max="12" v-model="cBusinesses" />
                </div>
            </div>
        </div>
        <TaxFormula class="no-select">
            <div class="detailed-content">
                <div class="label-group no-break">
                    <div class="label-group-content">
                        {{ taxMultiplier }}
                        <vardis /> &times; {{ cBusinesses }} &equals; {{ employmentTax }}
                        <vardis />
                    </div>
                    <div class="label-group-label">{{ $t('taxes.employment') }}</div>
                </div>

                <span class="formula-separator">&plus;</span>

                <div class="label-group no-break">
                    <div class="label-group-content" style="min-width: 3.5em">&nbsp;&nbsp;{{ corporateTax }}
                        <vardis />&nbsp;&nbsp;
                    </div>
                    <div class="label-group-label">{{ $t('taxes.corporate') }}</div>
                </div>
            </div>
            <span class="detailed-content formula-separator">&rArr;&nbsp;</span>
            <span class="formula-result"> {{ employmentTax + corporateTax }}
                <vardis />
            </span>
        </TaxFormula>
    </div>
</template>

<style lang="scss">
.capitalist-class {
    background-color: #058dda;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;

    .capitalist-parameters {
        display: grid;
        grid-template-columns: 5fr 4fr;

        @media screen and (max-width: 529px) {
            grid-template-columns: 1fr;
        }
    }

    .capitalist-parameter {
        margin: 0.5em 10%;

        @media screen and (max-width: 529px) {
            margin: 0.5em 2.3em;
        }
    }

    .icon-business-c {
        background-size: 2.75em;
        filter: drop-shadow(0px 0px 8px rgb(0 0 0 / 0.75));
    }

    .icon-income {
        background-size: 90%;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from 'vue';
export default defineComponent({});
</script>
