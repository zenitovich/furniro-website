import './styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import routes from "@/router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import store from "@/store";

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex)

Vue.component("DefaultLayout", DefaultLayout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
