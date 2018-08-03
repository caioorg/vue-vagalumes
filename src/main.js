import './assets/scss/main.scss'
import Vue from 'vue'

// Request HTTP
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Routers
import VueRouter from 'vue-router'
import { routes } from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.prototype.$baseUrl = 'https://www.vagalume.com.br'

// Render
const app = new Vue({
  router
}).$mount('#app')
