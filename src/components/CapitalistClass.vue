<script setup lang="ts">
import { getPolicyStore } from '@/stores/policies';
import { getClassStore } from '@/stores/classes';

const { tax, taxMultiplier } = getPolicyStore();
const { cBusinesses, cIncome } = getClassStore();

const corporateTax = {
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
    for (const [key, value] of Object.entries(corporateTax)) {
        if (income <= Number(key)) {
            return value[policy] ?? NaN;
        }
    }
    return NaN;
}
</script>

<template>
    <div class="capitalist-class card">
        <h3>{{ $t('header.capitalist') }}</h3>

        <div class="capitalist-parameters">
            <div class="split">
                <div class="parameter-icon icon-income" />
                <div class="capitalist-parameter parameter-income">
                    <NumberInput :min="0" :max="999" :intervalTimeout="40" v-model="cIncome" />
                </div>
            </div>
            <div class="split">
                <div class="parameter-icon icon-business-c" />
                <div class="capitalist-parameter parameter-businesses">
                    <NumberInput :min="0" :max="12" v-model="cBusinesses" />
                </div>
            </div>
        </div>
        <TaxFormula class="no-select">
            <div class="detailed-content">
                <div class="label-group no-break">
                    <div class="label-group-content">
                        {{ taxMultiplier }}¥ &times; {{ cBusinesses }} &equals; {{ taxMultiplier * cBusinesses }}¥
                    </div>
                    <div class="label-group-label">{{ $t('taxes.employment') }}</div>
                </div>

                <span class="formula-separator">&plus;</span>

                <div class="label-group no-break">
                    <div class="label-group-content" style="min-width: 3.4em">
                        &nbsp;&nbsp;{{ getCorporateTax(cIncome - taxMultiplier * cBusinesses, tax) }}¥&nbsp;&nbsp;
                    </div>
                    <div class="label-group-label">{{ $t('taxes.corporate') }}</div>
                </div>
            </div>
            <span class="detailed-content formula-separator">&rArr;&nbsp;</span>
            <span class="formula-result">
                {{ taxMultiplier * cBusinesses + getCorporateTax(cIncome - taxMultiplier * cBusinesses, tax) }}¥
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
            margin: 0.5em 2em;
        }
    }

    .icon-business-c {
        background-size: 2.75em;
        filter: drop-shadow(0px 0px 8px rgb(0 0 0 / 0.75));
    }

    .icon-income {
        // background-size: 2.6em;
        background-size: 90%;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
