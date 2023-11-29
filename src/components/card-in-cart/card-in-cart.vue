<template>
  <div class="card-in-cart">
    <img :src="image" class="card-in-cart__img" />
    <span class="card-in-cart__text">{{ name }}</span>
    <span class="card-in-cart__text">Rs {{ price }},000</span>
    <span class="card-in-cart__quantity">{{ quantity }}</span>
    <span class="card-in-cart__total">Rs {{ price * quantity }},000</span>
    <input type="button" class="card-in-cart__btn" @click="setCart()" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CardInCart',

  props: {
    id: {
      type: Number
    },

    image: {
      type: String,
      default() {
        return '';
      }
    },

    name: {
      type: String,
      default() {
        return 'defaultName';
      }
    },

    price: {
      type: Number,
      default() {
        return 0;
      }
    },

    quantity: {
      type: Number,
      default() {
        return 0;
      }
    }
  },

  computed: {
    ...mapGetters(['productsInCart'])
  },

  methods: {
    ...mapMutations(['setProductsInCart']),

    setCart() {
      this.setProductsInCart([this.id, false, 1]);
    }
  }
};
</script>

<style scoped lang="scss">
@import 'card-in-cart';
</style>
