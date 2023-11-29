<template>
  <div class="cart">
    <div class="cart__products">
      <div class="cart__products--titles">
        <span class="cart__products--title">Image</span>
        <span class="cart__products--title">Product</span>
        <span class="cart__products--title">Price</span>
        <span class="cart__products--title">Quantity</span>
        <span class="cart__products--title">Subtotal</span>
      </div>
      <card-in-cart
        v-for="product in productsFromCart"
        :id="product.id"
        :key="product.id"
        :image="product.image"
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
      ></card-in-cart>
    </div>
    <div class="cart__totals">
      <h1 class="cart__totals--title">Cart Totals</h1>
      <span class="cart__totals--subtotal"
        >Subtotal: <span class="cart__totals--subtotal-value">Rs {{ totalPriceInCart }},000</span></span
      >
      <span class="cart__totals--total"
        >Total: <span class="cart__totals--total-value">Rs {{ totalPriceInCart }},000</span></span
      >
      <button class="cart__totals--btn" @click="$router.push('checkout')">Check Out</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CardInCart from '@/components/card-in-cart/card-in-cart.vue';

export default {
  name: 'CartPage',
  components: { CardInCart },

  mounted() {
    this.fetchProducts();
  },

  computed: {
    ...mapGetters(['productsInCart', 'products', 'totalPriceInCart']),

    productsFromCart() {
      return this.productsInCart.map((productInCart) => {
        const productData = this.products.find((product) => product.id === productInCart.productId);

        return {
          ...productData,
          quantity: productInCart.quantity
        };
      });
    }
  },

  methods: {
    ...mapMutations(['setProductsInCart']),

    ...mapActions(['fetchProducts'])
  }
};
</script>

<style scoped lang="scss">
@import 'cart';
</style>
