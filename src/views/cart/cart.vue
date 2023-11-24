<template>
  <div class="cart">
    <div class="cart__products">
      <div class="cart__products--titles">
        <span class="cart__products--title">Products</span>
        <span class="cart__products--title">Price</span>
        <span class="cart__products--title">Quantity</span>
        <span class="cart__products--title">Subtotal</span>
      </div>
      <div v-for="product in productsInCart" :key="product.id" class="cart__products--list">{{ product }}</div>
    </div>
    <div class="cart__totals">
      <h1 class="cart__totals--title">Cart Totals</h1>
      <span class="cart__totals--subtotal">Sub total {{ getTotal() }}</span>
      <span class="cart__totals--total">Total</span>
      <button class="cart__totals--btn">Check Out</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartPage',

  computed: {
    ...mapGetters(['productsInCart'])
  },

  methods: {
    getTotal() {
      let total = 0;
      this.productsInCart.forEach((product) => {
        total += product.price * product.quantity;
      });
      return total;
    }
  }
};
</script>

<style scoped lang="scss">
@import 'cart';
</style>
