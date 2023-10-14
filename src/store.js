import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

let store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products
    }
  },
  actions: {
    GET_PRODUCTS_FROM_DATA({commit}) {
      return axios('http://localhost:4000/items/', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          console.log(products)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
  },
})

export default store
