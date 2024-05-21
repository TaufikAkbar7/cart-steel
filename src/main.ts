import './app/assets/base.css'

import { createApp } from 'vue'
import components from './app/components'

import App from './App.vue'
import router from './router'
import pinia from './app/store'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaTrash, BiPlusLg, HiMinus, BiCheckCircle, BiCart } from 'oh-vue-icons/icons'

addIcons(FaTrash, HiMinus, BiPlusLg, BiCheckCircle, BiCart)

const app = createApp(App)

app.use(pinia)
app.use(router)
components(app)
app.component('v-icon', OhVueIcon)

app.mount('#app')
