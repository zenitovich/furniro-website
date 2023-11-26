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
      <card-in-cart v-for="product in getProductsFromCart" :key="product.id" :product-data="product"></card-in-cart>
    </div>
    <div class="cart__totals">
      <h1 class="cart__totals--title">Cart Totals</h1>
      <span class="cart__totals--subtotal"
        >Subtotal: <span class="cart__totals--subtotal-value">Rs {{ getTotal }},000</span></span
      >
      <span class="cart__totals--total"
        >Total: <span class="cart__totals--total-value">Rs {{ getTotal }},000</span></span
      >
      <button class="cart__totals--btn" @click="$router.push('checkout')">Check Out</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CardInCart from '@/components/card-in-cart/card-in-cart.vue';
import checkout from '@/views/checkout/checkout.vue';

export default {
  name: 'CartPage',
  components: { CardInCart },

  computed: {
    checkout() {
      return checkout;
    },
    ...mapGetters(['productsInCart', 'products']),

    getProductsFromCart() {
      let idInCart = this.productsInCart.map((product) => product.productId);
      return this.products.filter((product) => idInCart.includes(product.id));
    },

    getTotal() {
      let total = 0;

      const filteredArray = this.filterArray(this.products);

      const mergedArray = this.productsInCart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: filteredArray.find((product) => product.id === item.productId).price
      }));

      mergedArray.forEach((p) => (total += p.price * p.quantity));

      return total;
    }
  },

  methods: {
    ...mapMutations(['setProductsInCart']),

    ...mapActions(['fetchProducts']),

    filterArray(array) {
      return array.map((item) => {
        const { id, price } = item;
        return { id, price };
      });
    }
  },

  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped lang="scss">
@import 'cart';
</style>
