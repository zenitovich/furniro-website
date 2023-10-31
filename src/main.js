import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import routes from '@/router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import App from './App.vue'
import store from '@/store/store'

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.component('DefaultLayout', DefaultLayout)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')

store.subscribe((mutation, { likedProducts, productInCart }) => {
  //если значение равно ключу остаетс ятолько значение
  localStorage.setItem(
    'store',
    JSON.stringify({ likedProducts, productInCart })
  )
})
