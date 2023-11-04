export const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products
  },

  initialiseStore(state) {
    if (
      localStorage.getItem('store')
      // && (state.productInCart.length > 0 || state.likedProducts.length > 0)
    ) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      )
    }
  },

  setLikedProducts(state, [likedProductsId, like]) {
    if (like) {
      if (!state.likedProducts.includes(likedProductsId)) {
        state.likedProducts.push(likedProductsId)
      }
    } else {
      state.likedProducts = state.likedProducts.filter(
        (id) => id !== likedProductsId
      )
    }
  },

  setProductsInCart(state, [productId, inCart]) {
    if (inCart) {
      if (!state.productInCart.includes(productId)) {
        state.productInCart.push(productId)
      }
    } else {
      state.productInCart = state.productInCart.filter((id) => id !== productId)
    }
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
}
