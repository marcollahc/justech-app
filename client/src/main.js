import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { BaseButton } from './components/base-components'

library.add(fas, far);
const app = createApp(App)

app
  .component('base-button', BaseButton)
  .component("font-awesome-icon", FontAwesomeIcon);

app.use(router)
app.mount('#app')
