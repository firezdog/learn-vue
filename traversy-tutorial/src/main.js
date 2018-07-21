import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import Users from './components/Users'
import Test from './components/Test'

Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	  template:
	  `<div id='app'>
	  	<ul>
			<li><router-link to='/'>Users</router-link></li>
			<li><router-link to='/test'>Test</router-link></li>
		</ul>
		<router-view></router-view>
	</div>`
}).$mount('#app');
