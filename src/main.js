import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'

import './fonts/fonts.css'
import './styles/main.scss'

Vue.config.productionTip = false

import Index from '@pages/Index'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
    },
  ],
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
