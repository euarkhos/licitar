import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/main.css'
import App from './App.vue'
import routes from './router'
import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true
})

app.mount('#app')
