<script lang="ts" setup>
import { ref } from 'vue';
import { getSettingsStore } from '@/stores/settings';
import { useClassStore } from '@/stores/classes';
import { usePolicyStore } from '@/stores/policies';
import ModalComponent from '@/components/ModalComponent.vue';

const { store, language, showFormula, showTaxMultiplier } = getSettingsStore();

const baseUrl = import.meta.env.BASE_URL;
const isModalOpened = ref(false);

const showQr = () => {
    isModalOpened.value = true;
};
const hideQr = () => {
    isModalOpened.value = false;
};

function resetStores() {
    store.$reset();
    usePolicyStore().$reset();
    useClassStore().$reset();
}

const appVersion = `v${__APP_VERSION__}`;
const licenseUrl = `${__APP_REPO__}/blob/main/LICENSE`;
const issuesUrl = `${__APP_REPO__}/issues`;
</script>

<template>
    <div class="card bottom">
        <div class="app-settings">
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
                <div class="settings-icon icon-tax-multiplier-black" @click="() => (showTaxMultiplier = !showTaxMultiplier)" />
                <div class="settings-icon icon-formula" @click="() => (showFormula = !showFormula)" />
                <div class="settings-icon icon-reset" @click="resetStores" />
                <div class="settings-icon icon-share" @click="showQr" />
                <ModalComponent :show="isModalOpened" @click="hideQr" @modal-close="hideQr" name="qr-modal">
                    <template #header>Share App</template>
                    <template #content>
                        <div class="share-app"><img src="/icons/qr-code.svg" /></div>
                    </template>
                </ModalComponent>
            </div>
        </div>
        <div class="settings-license no-break">
            &copy; Yvo Niedrich
            <span class="text-separator"> | </span>
            <a :href="issuesUrl" target="_blank">{{ appVersion }}</a>
            <span class="text-separator"> | </span>
            <a :href="licenseUrl" target="_blank">MIT License</a>
        </div>
    </div>
</template>

<style lang="scss">
.share-app {
    box-shadow: 0 0 10px #000;

    border: 6px solid #fff;
    border-radius: 0.25em;
    margin: 1.8em auto;

    width: 14em;
    height: 14em;

    > img {
        width: 100%;
        height: 100%;
    }
}

.card.bottom {
    border-color: #111;
    border-radius: 0.325rem;
    background-color: #29373c;
    margin-top: 0.8em;
    margin-bottom: 0.5em;
    padding: 0;

    display: grid;
    grid-template-columns: 5fr 3fr;

    @media screen and (max-width: 719px) {
        grid-template-columns: 11fr 7fr;
    }

    @media screen and (max-width: 529px) {
        grid-template-columns: 1fr;
    }

    .app-settings {
        display: grid;
        grid-template-columns: 3fr 4fr;

        @media screen and (max-width: 719px) {
            grid-template-columns: 5fr 8fr;
        }
    }

    .app-settings > div,
    .settings-license {
        padding-top: 0.5em;
        padding-bottom: 0.3em;
        text-align: center;
    }

    .language-icon,
    .settings-icon {
        cursor: pointer;
        height: 1.4em;
        margin: 0 0.3em;

        border-radius: 0.325rem;
    }

    .settings-config,
    .settings-license {
        border-color: #292929;
        border-style: solid;
        border-width: 0 0 0 1px;
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

        .settings-icon .cls-1 {
            fill: #000;
        }
    }

    .settings-license {
        color: #666;
        line-height: 2.4em;
        font-size: 0.7em;

        a {
            color: #666;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }

        @media screen and (max-width: 529px) {
            border-width: 1px 0 0 0;
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
