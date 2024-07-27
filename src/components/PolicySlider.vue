<script setup lang="ts">
import { computed, defineProps, defineComponent, ref } from 'vue';
import NumberSlider from './NumberSlider.vue';
import { getPolicyStore } from '@/stores/policies';
const { fiscal, labor, tax, health, education, imfLabor, imfRelevant } = getPolicyStore();

const props = defineProps<{ policy?: 'fiscal' | 'labor' | 'tax' | 'health' | 'education' }>();

function policyIndex(name: string | undefined) {
    switch (name) {
        case 'fiscal':
            return 1;
        case 'labor':
            return 2;
        case 'tax':
            return 3;
        case 'health':
            return 4;
        case 'education':
            return 5;
        default:
            return 0;
    }
}

const policyNumber = computed(() => policyIndex(props.policy));

const policyName = computed(() => {
    return [
        'policy.unknown',
        'policy.fiscal',
        'policy.labor',
        'policy.tax',
        'policy.health',
        'policy.education',
    ][policyNumber.value];
});

const policyValue = [ref(-1), fiscal, labor, tax, health, education][policyNumber.value];
const indicatorValue = props.policy === 'labor' ? imfLabor : ref(-1);
</script>

<template>
    <div class="card narrow split policy no-select" :class="{ ['policy-' + props.policy]: true }">
        <div class="policy-column policy-number">
            <div class="thin">
                {{ policyNumber }}
            </div>
        </div>

        <div class="policy-column policy-slider">
            <h3>{{ $t(policyName) }}</h3>
            <NumberSlider :class="{ 'soft': !imfRelevant }" v-model:value.number="policyValue"
                v-model:indicator.number="indicatorValue" min="0" max="2" :format="(x: number) => ['A', 'B', 'C'][x]" />
        </div>
    </div>
</template>

<style lang="scss">
.policy {
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;
    transition: 0.2s ease-in-out;

    &.policy-fiscal {
        background-color: #048dc2;
    }

    &.policy-labor {
        background-color: #7a6fab;
    }

    &.policy-tax {
        background-color: #be53a1;
    }

    &.policy-health {
        background-color: #cb1312;
    }

    &.policy-education {
        background-color: #f39404;
    }

    h3 {
        margin-bottom: 0.5em;
    }

    @media (min-width: 719px) and (max-width: 980px) {
        grid-template-columns: 2em 1fr;
        padding-left: 0.6em;
    }

    .policy-number {
        display: table;
        margin-right: 0.6em;
        border-right: 1px solid #ddd;

        @media (min-width: 719px) and (max-width: 980px) {
            margin-right: 0.2em;
        }

        &>div {
            display: table-cell;
            vertical-align: middle;
            text-align: center;

            transition:
                margin 0.2s ease-in-out,
                line-height 0.2s ease-in-out;

            padding-right: 0.1em;
            font-size: 3.5em;
            font-weight: 400;

            @media (min-width: 719px) and (max-width: 980px) {
                font-size: 2.5em;
                line-height: 1.6em;
                font-stretch: extra-condensed;
            }
        }
    }
}
</style>

<script lang="ts">
export default defineComponent({});
</script>
