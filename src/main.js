import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCodeHighlight from 'vue-code-highlight'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(VueCodeHighlight)

app.use(router)

app.mount('#app')
