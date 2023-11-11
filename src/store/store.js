import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { mutations } from '@/store/mutations';
import { getters } from '@/store/getters';
import { actions } from '@/store/actions';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
  state: {
    products: [],
    likedProducts: [],
    productInCart: [],
    product: {}
  },

  mutations: mutations,

  actions: actions,

  getters: getters
});

export default store;
