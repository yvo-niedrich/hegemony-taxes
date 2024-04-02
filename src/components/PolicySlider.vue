<script setup lang="ts">
import { computed, defineProps, defineModel, defineComponent } from 'vue';
import NumberSlider from './NumberSlider.vue';

const props = defineProps<{ policy?: 'fiscal' | 'labor' | 'tax' | 'health' | 'education' }>();

const policyName = computed(() => {
    switch (props.policy) {
        case 'fiscal':
            return 'policy.fiscal';
        case 'labor':
            return 'policy.labor';
        case 'tax':
            return 'policy.tax';
        case 'health':
            return 'policy.health';
        case 'education':
            return 'policy.education';
        default:
            return 'policy.unknown';
    }
});

const policyNumber = computed(() => {
    switch (props.policy) {
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
            return '?';
    }
});

const model = defineModel({
    default: 1,
    type: Number,
});
</script>

<template>
    <div class="card split policy no-select" :class="{ ['policy-' + props.policy]: true }">
        <div class="policy-column">
            <div class="policy-number">
                {{ policyNumber }}
            </div>
        </div>

        <div class="policy-column">
            <h3>{{ $t(policyName) }}</h3>
            <NumberSlider v-model.number="model" min="0" max="2" :format="(x: number) => ['A', 'B', 'C'][x]" />
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
    @media (min-width: 719px) and (max-width: 980px) {
        grid-template-columns: 2.2em 1fr;
        padding-left: 0.6em;
    }
    .policy-number {
        transition:
            margin 0.2s ease-in-out,
            line-height 0.2s ease-in-out;

        padding: 0;
        margin-right: 0.2em;
        font-weight: bold;
        font-size: 4em;
        font-stretch: semi-condensed;
        border-right: 1px solid #ffffff;

        @media (min-width: 719px) and (max-width: 980px) {
            margin-right: 0.15em;
            font-size: 2.8em;
            line-height: 1.6em;
            font-stretch: extra-condensed;
        }
    }
}
</style>

<script lang="ts">
export default defineComponent({});
</script>
