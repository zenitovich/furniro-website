import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    products: [],
    likedProducts: [],
    productInCart: []
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
    },

    removeLikedProducts(state, likedProductsId) {
      state.likedProducts = state.likedProducts.filter(
        (id) => id !== likedProductsId
      )
    },

    addProductToCart(state, productId) {
      if (!state.productInCart.includes(productId)) {
        state.productInCart.push(productId)
        console.log(state.productInCart, 'added')
      }
    },

    removeProductFromCart(state, productId) {
      state.productInCart = state.productInCart.filter((id) => id !== productId)
      console.log(state.productInCart, 'remove')
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
    },

    LIKED_PRODUCTS(state) {
      return state.likedProducts
    },

    PRODUCTS_IN_CART(state) {
      return state.productInCart
    }
  }
})

export default store
