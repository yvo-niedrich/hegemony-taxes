import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import { useSettingsStore } from '@/stores/settings';

import en from '@/translation/en';
import de from '@/translation/de';

import NumberInput from '@/components/NumberInput.vue';
import TaxFormula from '@/components/TaxFormula.vue';

const app = createApp(App);

app.use(createPinia());

const { language } = useSettingsStore();

app.use(
    createI18n({
        locale: language ?? 'en', // set locale
        fallbackLocale: 'en', // set fallback locale
        messages: { en, de },
    }),
);

app.component(NumberInput.name ?? 'NumberInput', NumberInput);
app.component('TaxFormula', TaxFormula);

app.mount('#app');
