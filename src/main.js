import Vue from 'vue'
import App from './App'
import router from './router'
import '@assets/style/minireset.css'
import '@assets/style/border.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
