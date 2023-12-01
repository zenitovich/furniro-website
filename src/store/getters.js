export const getters = {
  products(state) {
    return state.products;
  },

  likedProducts(state) {
    return state.likedProducts;
  },

  productsInCart(state) {
    return state.productInCart;
  },

  product(state) {
    return state.product;
  },

  totalPriceInCart(state) {
    console.log(state);
    return state.productInCart?.reduce((accumulator, productInCart) => {
      const productPrice = state.products.find((product) => product.id === productInCart.productId)?.price;
      return (accumulator += productPrice * productInCart.quantity);
    }, 0);
  },

  countries(state) {
    return state.countries;
  }
};
