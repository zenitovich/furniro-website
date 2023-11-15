export const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products;
  },

  SET_PRODUCT(state, product) {
    state.product = product;
  },

  initialiseStore(state) {
    if (localStorage.getItem('store')) {
      this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
    }
  },

  setLikedProducts(state, [likedProductsId, like]) {
    if (like) {
      if (!state.likedProducts.includes(likedProductsId)) {
        state.likedProducts.push(likedProductsId);
      }
    } else {
      state.likedProducts = state.likedProducts.filter((id) => id !== likedProductsId);
    }
  },

  setProductsInCart(state, [productId, inCart, quantity]) {
    if (inCart) {
      state.productInCart.push({ productId, quantity });
    } else {
      state.productInCart = state.productInCart.filter((product) => product.productId !== productId);
    }
  }
};
