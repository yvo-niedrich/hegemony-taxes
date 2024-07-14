<script setup lang="ts">
import { defineComponent } from 'vue';
import { getPolicyStore } from '@/stores/policies';
const { taxMultiplier } = getPolicyStore();
</script>

<template>
    <div class="card split tax-multiplier no-select">
        <div class="parameter-icon icon-tax-multiplier" />

        <div class="tax-multiplier-container">
            <div class="tax-multiplier-label">{{ taxMultiplier }}</div>
        </div>
    </div>
</template>

<style lang="scss">
.tax-multiplier {
    color: #ffffff;
    background-color: #26363d;
    text-shadow: #35474d 0 0 1px;
    transition: 0.2s ease-in-out;
    padding: 0.5em;

    .tax-multiplier-container {
        text-align: center;

        .tax-multiplier-label {
            display: inline-block;
            background-color: #fff;
            color: #000;

            padding: auto;
            line-height: 2.1em;
            height: 2.1em;
            width: 2.2em;

            font-size: 1.1rem;
            font-weight: bold;
            border: 2px #000 solid;
            border-radius: 1.5em;
            box-shadow: 0 0 1em #35464d;

            @media screen and (max-width: 980px) {
                line-height: 1.8em;
                height: 1.8em;
            }
        }
    }

    @media (min-width: 719px) and (max-width: 980px) {
        grid-template-columns: 2em 1fr;
        padding-left: 0.6em;
    }
}
</style>

<script lang="ts">
export default defineComponent({});
</script>
