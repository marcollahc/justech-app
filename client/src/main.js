import './assets/main.scss'
import 'vue-select/dist/vue-select.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import vSelect from 'vue-select';

import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import router from './router/index.js'

import { BaseButton, BaseInput, BaseSelect } from './components/base-components'

library.add(fas, far);
const app = createApp(App)

app.use(router)

app
  .component('base-button', BaseButton)
  .component('base-input', BaseInput)
  .component('base-select', BaseSelect)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('apexchart', VueApexCharts)
  .component('v-select', vSelect)

app.mount('#app')