<template>
  <div class="card-in-cart">
    <img :src="productData.image" class="card-in-cart__img" />
    <span class="card-in-cart__text">{{ productData.name }}</span>
    <span class="card-in-cart__text">Rs {{ productData.price }},000</span>
    <span class="card-in-cart__quantity">{{ quantity }}</span>
    <span class="card-in-cart__total">Rs {{ productData.price * quantity }},000</span>
    <img src="../../assets/icons/remove-from-cart.svg" class="card-in-cart__icon" @click="setCart(inCart)" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CardInCart',

  computed: {
    ...mapGetters(['productsInCart']),

    inCart(vm) {
      let result = vm.productsInCart.map((item) => item.productId);
      return result.includes(vm.productData.id);
    },

    quantity() {
      return this.productsInCart.filter((product) => product.productId === this.productData.id)[0].quantity;
    }
  },

  methods: {
    ...mapMutations(['setProductsInCart']),

    setCart(inCart) {
      this.setProductsInCart([
        this.productData.id,
        !inCart,
        1,
        this.productData.image,
        this.productData.name,
        this.productData.price
      ]);
    }
  },

  props: {
    productData: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import 'card-in-cart';
</style>
