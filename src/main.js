import { createApp } from 'vue';
import './assets/tailwind.css';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

import enLocale from './locales/english.json';
import ruLocale from './locales/russian.json';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enLocale,
    ru: ruLocale,
  },
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
