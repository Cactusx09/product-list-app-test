import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSortAlphaUp,
  faSortAlphaDown,
  faSortNumericUp,
  faSortNumericDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faSortAlphaUp,
  faSortAlphaDown,
  faSortNumericUp,
  faSortNumericDown,
  faTimes,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Buefy from 'buefy'
Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas',
});
import 'buefy/dist/buefy.css'

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
