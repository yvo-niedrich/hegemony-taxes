<template>
    <div class="policy" :class="classObject">
        <div class="policy-column">
            <div class="policy-number">
                {{ policyNumber }}
            </div>
        </div>

        <div class="policy-column">
            <div class="policy-name">
                <h3>{{ $t(policyName) }}</h3>
            </div>

            <div class="policy-options">
                <div class="policy-option-a" @click="() => setPolicy(0)">A</div>
                <div class="policy-option-b" @click="() => setPolicy(1)">B</div>
                <div class="policy-option-c" @click="() => setPolicy(2)">C</div>
            </div>

            <div class="policy-slider">
                <input v-model.number="model" type="range" min="0" max="2" class="slider" />
            </div>
        </div>
    </div>
</template>

<style scoped>
h3 {
    margin: 0 0 0.6em 0;
    font-size: 0.8rem;
    font-weight: bold;
}
</style>

<style>
.policy {
    border: 1px solid #000000;
    border-radius: 1em;
    padding: 1em 0.8em;
    margin: 0.2em;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: grid;
    grid-template-columns: 3.5em auto; /* Two columns with equal width */
}

.policy-number {
    padding: 0;
    margin: 0 0.2em 0 0;
    font-weight: bold;
    font-size: 4em;
    font-stretch: semi-condensed;
    border-right: 1px solid #ffffff;
}

.policy.policy-fiscal {
    background-color: #048dc2;
}
.policy.policy-labor {
    background-color: #7a6fab;
}
.policy.policy-tax {
    background-color: #be53a1;
}
.policy.policy-health {
    background-color: #cb1312;
}
.policy.policy-education {
    background-color: #f39404;
}

.policy-name {
    text-align: center;
}
.policy-options {
    display: flex;
}
.policy-options > div {
    padding: 0 0.5em;
    flex-grow: 1;
    font-weight: bold;
    font-size: 1.4em;
    cursor: pointer;
}
.policy-option-a {
    text-align: left;
}
.policy-option-b {
    text-align: center;
}
.policy-option-c {
    text-align: right;
}

.policy-slider {
    text-align: center;
    margin: 0 0.1em;
    padding: 0 0.5em;
}
/*********** Baseline, reset styles ***********/
.policy-slider input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 1.5em;
}

/* Removes default focus */
.policy-slider input[type='range']:focus,
.policy-slider input[type='range']:focus::-moz-range-thumb,
.policy-slider input[type='range']:focus::-webkit-slider-thumb {
    outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
.policy-slider input[type='range']::-webkit-slider-runnable-track {
    background-color: #222f34;
    border-radius: 1em;
    height: 0.4rem;
}

/* slider thumb */
.policy-slider input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -6.999999999999999px; /* Centers thumb on the track */
    background-color: #566d75;
    border: 1px solid #35474d;
    box-shadow: #35474d 0px 0px 4px;
    border-radius: 1.2em;
    height: 1.2em;
    width: 1.2em;
}

/*********** Firefox styles ***********/
/* slider track */
.policy-slider input[type='range']::-moz-range-track {
    background-color: #222f34;
    border-radius: 1em;
    height: 0.4rem;
}

/* slider thumb */
.policy-slider input[type='range']::-moz-range-thumb {
    background-color: #566d75;
    border: 1px solid #35474d;
    box-shadow: #35474d 0px 0px 4px;
    border-radius: 1.2em;
    height: 1.2em;
    width: 1.2em;
}
</style>

<script setup lang="ts">
import { computed, defineProps, defineModel, defineComponent } from 'vue';

const props = defineProps<{ policy?: 'fiscal' | 'labor' | 'tax' | 'health' | 'education' }>();

const classObject = computed(() => {
    const classes = {} as any;
    if (props.policy) classes['policy-' + props.policy] = true;
    return classes;
});

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

function setPolicy(num: number) {
    model.value = num;
}
</script>

<script lang="ts">
export default defineComponent({});
</script>
