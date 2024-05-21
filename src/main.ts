import './app/assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from './app/components'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaTrash, BiPlusLg, HiMinus, BiCheckCircle } from 'oh-vue-icons/icons'

addIcons(FaTrash, HiMinus, BiPlusLg, BiCheckCircle)

const app = createApp(App)

app.use(createPinia())
app.use(router)
components(app)
app.component('v-icon', OhVueIcon)

app.mount('#app')
