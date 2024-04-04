<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        default: 'bottom',
    },
    tooltipId: {
        type: String,
        default: 'tooltip__text',
    },
});

const forceVisibility = ref(false);
let timer = null;

const tooltipClasses = computed(() => ({
    tooltip__text: true,
    [`tooltip--${props.position}`]: true,
    visible: forceVisibility.value,
}));

function forceShow() {
    if (forceVisibility.value) {
        return forceUnshow();
    }
    forceVisibility.value = true;
    timer = setTimeout(forceUnshow, 4000);
}

function forceUnshow() {
    forceVisibility.value = false;
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

const target = ref(null);
onClickOutside(target, forceUnshow);
</script>

<template>
    <div ref="target" class="tooltip-wrapper" @click="forceShow">
        <slot />
        <span :class="tooltipClasses" role="tooltip" :id="tooltipId" inert>{{ text }}</span>
    </div>
</template>

<style lang="scss">
.tooltip-wrapper {
    position: relative;
    display: inline-block;
}

.tooltip__text {
    visibility: hidden;
    opacity: 0;

    transition: 0.8s;

    text-align: center;
    color: #ffffff;
    font-size: 0.9em;

    padding: 0.2em 0.5em;
    border-radius: 0.35em;
    min-width: 15em;
    background: #292929;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);

    position: absolute;
    z-index: 10;
}

.tooltip-wrapper .tooltip__text.visible,
.tooltip-wrapper:hover .tooltip__text {
    visibility: visible;
    opacity: 1;
}

:slotted(*):focus + .tooltip__text {
    visibility: visible;
    opacity: 1;
}

.tooltip--top {
    inset-block-end: 110%;
    inset-inline-start: 50%;
    margin-inline-start: -40px;
}

.tooltip--bottom {
    inset-block-start: 110%;
    inset-inline-start: 50%;
    margin-inline-start: -40px;
}

.tooltip--left {
    inset-block-end: 0%;
    inset-inline-end: 110%;
}

.tooltip--right {
    inset-block-end: 0%;
    inset-inline-start: 110%;
}

.tooltip__text::after {
    content: ' ';
    position: absolute;
    border-width: 10px;
    border-style: solid;
    border-color: #292929 transparent transparent transparent;
}

.tooltip--left::after {
    inset-block-start: 50%;
    inset-inline-start: 100%;
    border-color: transparent transparent transparent #292929;
}

.tooltip--right::after {
    inset-block-start: 50%;
    inset-inline-end: 100%;
    border-color: transparent #292929 transparent transparent;
}

.tooltip--top::after {
    inset-block-start: 100%;
    inset-inline-start: 50%;
    border-color: #292929 transparent transparent transparent;
}

.tooltip--bottom::after {
    inset-block-end: 100%;
    inset-inline-start: 15%;
    border-color: transparent transparent #292929 transparent;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
