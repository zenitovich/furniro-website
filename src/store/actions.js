import axios from 'axios';

export const actions = {
  GET_PRODUCTS_FROM_DATA({ commit }) {
    return axios('http://localhost:4000/items/', {
      method: 'GET'
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_PRODUCT_FROM_DATA({ commit }, id) {
    return axios(`http://localhost:4000/item/${id}`, {
      method: 'GET'
    })
      .then((product) => {
        console.log(id, 'id');
        return product;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
};
