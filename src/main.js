import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/fluent-light/theme.css';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, { ripple: true });


// import { inject } from 'vue';
// const $appState = inject('$appState');
// const $primevue = inject('$primevue');

// app.provide('$appState', reactive({ inputStyle: 'outlined' }));
// app.provide('$primevue', app.config.globalProperties.$primevue);

app.mount('#app')
