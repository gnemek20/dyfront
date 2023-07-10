import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { basic } from '@/css/index.js'
Vue.use(basic)

import naver from 'vue-naver-maps'
Vue.use(naver, {
  clientID: '6kbpgfbf8d'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
