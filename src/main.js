import './assets/scss/main.scss'
import Vue from 'vue'

// Request HTTP
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Routers
import Home from './components/pages/Home'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

Vue.prototype.$baseUrl = 'https://www.vagalume.com.br'

const routes = [
  { path: "/", component: Home }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


// Render
const app = new Vue({
  router
}).$mount('#app')
