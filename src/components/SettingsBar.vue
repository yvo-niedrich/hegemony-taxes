<script lang="ts" setup>
import { getSettingsStore } from '@/stores/settings';
import { useClassStore } from '@/stores/classes';
import { usePolicyStore } from '@/stores/policies';
const { store, language, showFormula } = getSettingsStore();

const baseUrl = import.meta.env.BASE_URL;

function resetStores() {
    store.$reset();
    usePolicyStore().$reset();
    useClassStore().$reset();
}
</script>

<template>
    <div class="app-settings card">
        <div class="settings-language no-break">
            <img
                v-for="locale in $i18n.availableLocales"
                :src="`${baseUrl}/icons/flag-${locale}.svg`"
                :key="`locale-${locale}`"
                :class="{ 'language-icon': true, active: $i18n.locale == locale }"
                @click="() => ($i18n.locale = language = locale)"
            />
        </div>
        <div class="settings-config no-break">
            <div class="settings-icon setting-formula" @click="() => (showFormula = !showFormula)" />
            <div class="settings-icon setting-reset" @click="resetStores" />
        </div>
        <div class="settings-license no-break">
            &copy; Yvo Niedrich
            <span class="text-separator"> | </span>
            <a href="https://opensource.org/license/mit" target="_blank">MIT License</a>
        </div>
    </div>
</template>

<style lang="scss">
.card.app-settings {
    border-color: #111;
    border-radius: 0.325rem;
    background-color: #29373c;
    margin-top: 0.8em;
    margin-bottom: 0.5em;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    > div {
        padding-top: 0.5em;
        padding-bottom: 0.3em;
        text-align: center;
    }

    img,
    .settings-icon {
        cursor: pointer;
        height: 1.4em;
        margin: 0 0.4em;

        border-radius: 0.325rem;
    }

    .settings-config,
    .settings-license {
        border-left: 1px solid #222;
    }

    .settings-icon {
        display: inline-block;
        width: 2.6em;
        height: 1.4em;

        background-size: 100% 85%;
        background-repeat: no-repeat;
        background-position: center;

        background-color: #999;
        box-shadow: 0 0 1px #000;

        &.setting-formula {
            background-image: url('@/assets/icon-formula.svg');
        }

        &.setting-reset {
            background-image: url('@/assets/icon-reset.svg');
        }
    }

    .settings-license {
        color: #666;
        line-height: 2.4em;
        font-size: 0.7em;

        a {
            color: #888;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .language-icon {
        opacity: 0.6;

        &.active {
            opacity: 1;
            filter: drop-shadow(0px 0px 2px rgb(255 255 255 / 0.3));
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
