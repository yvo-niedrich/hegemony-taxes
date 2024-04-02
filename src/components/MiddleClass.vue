<script setup lang="ts">
import { defineComponent } from 'vue';
import NumberSlider from '@/components/NumberSlider.vue';
import { getPolicyStore } from '@/stores/policies';
import { getClassStore } from '@/stores/classes';

const { incomeTax, taxMultiplier } = getPolicyStore();
const { mEmployments, mBusinesses } = getClassStore();
</script>

<template>
    <div class="middle-class card">
        <h3>{{ $t('header.middleclass') }}</h3>

        <div class="split middleclass-operational">
            <img src="@/assets/icon-business-m.svg" class="icon-business-m" />
            <div class="middleclass-parameter parameter-income">
                <NumberSlider :min="0" :max="8" v-model.number="mBusinesses" />
            </div>
        </div>

        <div class="middleclass-divider" />

        <div class="split middleclass-labor">
            <div class="parameter-icon icon-business-c">
                <div class="parameter-icon icon-business-s"></div>
            </div>
            <div class="middleclass-parameter parameter-employment">
                <NumberInput :min="0" :max="24" v-model="mEmployments" />
            </div>
        </div>

        <TaxFormula class="no-select">
            <div class="detailed-content">
                <div class="label-group no-break">
                    <div class="label-group-content">
                        {{ incomeTax }}¥ &times; {{ mEmployments }} &equals; {{ mEmployments * incomeTax }}¥
                    </div>
                    <div class="label-group-label">{{ $t('taxes.income') }}</div>
                </div>

                <span class="formula-separator">&plus;</span>

                <div class="label-group no-break">
                    <div class="label-group-content">
                        {{ taxMultiplier }}¥ &times; {{ mBusinesses }} &equals; {{ taxMultiplier * mBusinesses }}¥
                    </div>
                    <div class="label-group-label">{{ $t('taxes.employment') }}</div>
                </div>
            </div>
            <span class="detailed-content formula-separator">&rArr;&nbsp;</span>

            <span class="formula-result">{{ mEmployments * incomeTax + mBusinesses * taxMultiplier }}¥</span>
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

<style lang="scss">
.middle-class {
    background-color: #fdc300;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;

    .icon-business-c {
        background-size: 2em;
        background-position: 10% 0%;
        filter: drop-shadow(0px 0px 1px rgb(255 255 255 / 0.5));
    }
    .icon-business-s {
        background-position: 90% 100%;
        background-size: 2em;
        filter: drop-shadow(0px 0px 1px rgb(255 255 255 / 0.5));
    }
    img.icon-business-m {
        margin: 0.5em auto 0 auto;
        width: 2.5em;
        height: 2.6em;
        filter: drop-shadow(0px 0px 6px rgb(0 0 0 / 0.6));
    }

    .middleclass-parameter.parameter-employment {
        margin: 0.2em 8em 0.2em 4em;

        @media screen and (max-width: 529px) {
            margin-left: 2em;
            margin-right: 2em;
        }
    }

    .middleclass-divider {
        background-color: #dfab00;
        height: 1px;
        border: 1px solid #ffcf33;
        border-left-width: 0;
        border-right-width: 0;
        margin: 0 2em;
    }

    .middle-class .split {
        margin: 0.8em 0;
    }

    .middle-class-logo {
        padding: 0 0.5em 0 0;
        text-align: center;
    }
}
</style>

<script lang="ts">
export default defineComponent({});
</script>
