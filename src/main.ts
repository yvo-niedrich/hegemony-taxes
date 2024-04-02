import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import { useSettingsStore } from '@/stores/settings';

import NumberInput from '@/components/NumberInput.vue';
import TaxFormula from '@/components/TaxFormula.vue';

const app = createApp(App);

app.use(createPinia());

const { language } = useSettingsStore();

app.use(
    createI18n({
        locale: language ?? 'en', // set locale
        fallbackLocale: 'en', // set fallback locale
        messages: {
            en: {
                header: {
                    multiplier: 'Tax Multiplier',
                    workingclass: 'Working Class',
                    middleclass: 'Middle Class',
                    capitalistclass: 'Capitalist Class',
                },
                taxes: {
                    income: 'Income Tax',
                    corporate: 'Corporate Tax',
                    employment: 'Employment Tax',
                },
                policy: {
                    fiscal: 'Fiscal Policy',
                    labor: 'Labor Market',
                    tax: 'Taxation',
                    health: 'Healthcare',
                    education: 'Education',
                    unknown: 'Unknown Policy',
                },
            },
            de: {
                header: {
                    multiplier: 'Steuermultiplikator',
                    workingclass: 'Arbeiterklasse',
                    middleclass: 'Mittelschicht',
                    capitalistclass: 'Kapitalist',
                },
                taxes: {
                    income: 'Einkommenssteuer',
                    corporate: 'Körperschaftssteuer',
                    employment: 'Lohnsteuer',
                },
                policy: {
                    fiscal: 'Fiskalpolitik',
                    labor: 'Arbeitsmarkt',
                    tax: 'Steuern',
                    health: 'Gesundheit',
                    education: 'Bildung',
                    unknown: 'Unbekannte Politik',
                },
            },
        },
    }),
);

app.component(NumberInput.name ?? 'NumberInput', NumberInput);
app.component('TaxFormula', TaxFormula);

app.mount('#app');
