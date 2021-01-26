import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import HeyWorld from '@/components/HeyWorld.vue'
Vue.component("HeyWorld",HeyWorld)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
