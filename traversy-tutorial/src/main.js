import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'

Vue.use(vueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
