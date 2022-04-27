import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import store from "./Store/index";
import router from './Routes.js'
createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')

