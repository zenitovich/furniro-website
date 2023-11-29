import axios from 'axios';

export const actions = {
  fetchProducts({ commit }) {
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

  fetchProduct({ commit }, id) {
    return axios(`http://localhost:4000/item/${id}`, {
      method: 'GET'
    })
      .then((product) => {
        commit('SET_PRODUCT', product.data);
        return product.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  fetchCountries({ commit }) {
    return axios('https://restcountries.com/v3.1/all', {
      method: 'GET'
    })
      .then(({ data }) => {
        console.log(data);
        const countryNames = data.map((country) => country.name.official);
        commit('SET_COUNTRIES', countryNames);
        return countryNames;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
};
