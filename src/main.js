import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ionic.js'
import Ionic from '@ionic/vue';


Vue.config.productionTip = false
Vue.use(Ionic)

let bus = new Vue
Vue.prototype.$bus = bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
