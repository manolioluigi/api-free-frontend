import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routers/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


createApp(App).use(router).mount('#app')
