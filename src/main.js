import './styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import routes from "@/router";

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.use(VueRouter);

Vue.component("DefaultLayout", DefaultLayout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
