<template>
    <div class="tax-box">
        <h3>{{ $t('header.multiplier') }}</h3>

        <div class="tax-grid">
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 1 }"><div>1</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 2 }"><div>2</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 3 }"><div>3</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 4 }"><div>4</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 5 }"><div>5</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 6 }"><div>6</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 7 }"><div>7</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 8 }"><div>8</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 9 }"><div>9</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 10 }"><div>10</div></div>
            <div class="tax-multiplier" :class="{ active: taxMultiplier == 11 }"><div>11</div></div>
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: #c79c0e;
    margin: 0 0 1.2em 0;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
}
</style>

<style>
.tax-box {
    background-color: #29373c;
    border: 1px solid #000000;
    border-radius: 1em;
    padding: 1.2em 1em;
    margin: 0.2em;
    color: #ffffff;
    text-shadow: #35474d 0 0 1px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.tax-grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
}

.tax-multiplier {
    text-align: center;
}

.tax-multiplier > div {
    opacity: 0.8;
    display: table-cell;
    text-align: center;
    background-color: #ffffff;
    color: #000000;
    border-radius: 4em;
    height: 2.5em;
    width: 2.5em;
    vertical-align: middle;
    box-shadow: #000000 0 0 4px;
}

.tax-multiplier.active > div {
    font-weight: bold;
    background-color: #ffc239;
    color: #ffffff;
    text-shadow: #000000 0 0 4px;
    opacity: 1;
}
</style>

<script setup lang="ts">
import { getPolicyStore } from '@/stores/policies';
import { defineComponent } from 'vue';

const { taxMultiplier } = getPolicyStore();
</script>

<script lang="ts">
export default defineComponent({});
</script>
