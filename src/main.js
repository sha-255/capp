import './style.css'
import App from './App.vue'
import Router from './router.js'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(Router)
app.use(pinia)

app.mount('#app')
