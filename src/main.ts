import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(
    createI18n({
        locale: 'en', // set locale
        fallbackLocale: 'en', // set fallback locale
        messages: {
            en: {
                header: {
                    multiplier: 'Tax Multiplier',
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

app.mount('#app');
