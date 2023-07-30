import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router.js'
import Srore from './store'

createApp(App).use(Router).use(Srore).mount('#app')
