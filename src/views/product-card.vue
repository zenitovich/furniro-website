<template>
  <div class="product-card">
    <img class="product-card__image" :src="product.image" />
    <div class="product-card__info">
      <div class="product-card__name">{{ product.name }}</div>
      <div class="product-card__price">Rs. {{ product.price }}.00</div>
      <div class="product-card__rating">Rating: {{ product.rating }}</div>
      <div class="product-card__description">{{ product.description }}</div>
      <div class="product-card__size">
        Size:
        <div v-for="size in product.size" :key="size" class="product-card__size--item">{{ size }}</div>
      </div>
      <div class="product-card__color">
        Color:
        <div
          v-for="color in product.color"
          :key="color"
          :style="`background-color: ${color}`"
          class="product-card__color--item"
        ></div>
      </div>
      <div class="product-card__quantity">
        <div class="product-card__quantity--selector">
          <button class="product-card__quantity--btn">-</button>
          <div class="product-card__quantity--number">1</div>
          <button class="product-card__quantity--btn">+</button>
        </div>
        <button class="product-card__add-to-cart">Add to Cart</button>
      </div>
      <div class="product-card__additional-info">
        <div class="product-card__additional-info--item">SKU: SS001</div>
        <div class="product-card__additional-info--item">Category: Sofas</div>
        <div class="product-card__additional-info--item">Tags: Sofa, Home, Shop</div>
        <div class="product-card__additional-info--item">Share: Facebook and more</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import './product-card.scss';

export default {
  name: 'ProductCardPage',

  methods: {
    ...mapActions(['GET_PRODUCT_FROM_DATA'])
  },

  computed: {
    ...mapGetters(['product'])
  },

  mounted() {
    this.GET_PRODUCT_FROM_DATA(`${this.$route.path.slice(14)}`);
  }
};
</script>

<style scoped></style>
