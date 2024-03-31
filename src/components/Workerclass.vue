<template>
    <div class="working-class">
        <div class="class-header">
            {{ $t('header.working-class') }}
        </div>
        <div class="working-population">
            <div class="population-options">
                <div v-for="i in 8" v-bind:key="i" class="worker-population-option" @click="() => setPopulation(i + 2)">{{ i + 2 }}</div>
            </div>
            <div class="working-population-slider">
                <input v-model.number="population" type="range" min="3" max="10" class="slider" />
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
.working-class {
    border: 1px solid #000000;
    border-radius: 1em;
    padding: 1em 0.8em;
    margin: 0.2em;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;
}

.population-options {
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.working-population {
    text-align: center;
    margin: 0 0.1em;
    padding: 0 0.5em;
}

.working-population-slider {
    margin: 0 0.2em;
}
/*********** Baseline, reset styles ***********/
.working-population-slider input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
}

/* Removes default focus */
.working-population-slider input[type='range']:focus,
.working-population-slider input[type='range']:focus::-moz-range-thumb,
.working-population-slider input[type='range']:focus::-webkit-slider-thumb {
    outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
.working-population-slider input[type='range']::-webkit-slider-runnable-track {
    background-color: #222f34;
    border-radius: 1em;
    height: 0.4rem;
}

/* slider thumb */
.working-population-slider input[type='range']::-webkit-slider-thumb {
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
.working-population-slider input[type='range']::-moz-range-track {
    background-color: #222f34;
    border-radius: 1em;
    height: 0.4rem;
}

/* slider thumb */
.working-population-slider input[type='range']::-moz-range-thumb {
    background-color: #566d75;
    border: 1px solid #35474d;
    box-shadow: #35474d 0px 0px 4px;
    border-radius: 1.2em;
    height: 1.2em;
    width: 1.2em;
}
</style>

<script setup lang="ts">
import { ref, defineComponent } from 'vue';
const population = ref(3);

function setPopulation(num: number) {
    population.value = Math.max(Math.min(num, 10), 3);
}
</script>

<script lang="ts">
export default defineComponent({});
</script>
