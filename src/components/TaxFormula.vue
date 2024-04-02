<script lang="ts" setup>
import { getSettingsStore } from '@/stores/settings';
const { showFormula } = getSettingsStore();
function toggleFormula() {
    showFormula.value = !showFormula.value;
}
</script>

<template>
    <div class="tax-formula" :class="{ detailed: showFormula }">
        <div class="tax-formula-icon" @click.prevent="toggleFormula"></div>
        <div class="tax-formula-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.tax-formula {
    transition: 0.2s ease-in-out;

    background-color: #fff;
    border: 1px solid #777;
    border-radius: 0.5rem;
    margin: 0.8em 1.5em 0 1.5em;

    @media screen and (max-width: 980px) {
        &.detailed {
            margin-left: 0.4em;
            margin-right: 0.4em;

            font-size: 1.3rem;
            line-height: 1.75em;
        }
    }

    @media screen and (max-width: 529px) {
        &.detailed {
            margin-left: 0.2em;
            margin-right: 0.2em;
            font-size: 1.15rem;
            line-height: 1.8em;
        }
    }

    text-align: center;
    font-weight: bolder;

    color: #000;
    font-size: 1.5rem;
    line-height: 1.4em;
    text-shadow: none;

    display: grid;
    grid-template-columns: 2em 1fr;

    .tax-formula-icon {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        cursor: pointer;
        background-color: #eee;
        background-image: url('@/assets/icon-tax-calculator.svg');
        background-size: 1.2em;
        background-repeat: no-repeat;
        background-position: center center;
        border-right: 1px solid #bbb;
    }

    &.detailed .tax-formula-icon {
        background-image: url('@/assets/icon-formula.svg');
    }

    .tax-formula-content {
        padding: 0.1em 0;
    }

    .detailed-content,
    &.detailed .simple-content {
        display: none;
    }

    &.detailed .detailed-content,
    .simple-content {
        display: inline-block;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
