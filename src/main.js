import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { basic } from '@/css/index.js'
Vue.use(basic)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
