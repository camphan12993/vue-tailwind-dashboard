import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import 'boxicons/css/boxicons.min.css';
import AmplifyVue from '@aws-amplify/ui-vue';

const app = createApp(App);
app.use(AmplifyVue);
app.use(store).use(router).mount('#app');
