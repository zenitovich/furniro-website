import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    products: [],
    likedProducts: []
  },

  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products
    },
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    },
    addLikedProduct(state, likedProductId) {
      if (!state.likedProducts.includes(likedProductId)) {
        state.likedProducts.push(likedProductId)
      }
    }
  },

  actions: {
    GET_PRODUCTS_FROM_DATA({ commit }) {
      return axios('http://localhost:4000/items/', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
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
    }
  }
})

export default store
