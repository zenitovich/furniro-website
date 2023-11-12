<template>
  <main>
    <div class="product-card">
      <img class="product-card__image" :src="product.image" />
      <div class="product-card__info">
        <div class="product-card__name">{{ product.name }}</div>
        <div class="product-card__price">Rs. {{ product.price }}.00</div>
        <div class="product-card__rating">Rating: {{ product.rating }}</div>
        <div class="product-card__description">{{ product.description }}</div>
        <div class="product-card__size">
          Size:
          <div v-for="size in product.size" :key="size" class="product-card__size--item">
            <input
              type="radio"
              name="size"
              value="size"
              class="product-card__size--item-radio"
              @click="checkSize(size)"
            />
            <label for="size" class="product-card__size--label">{{ size }}</label>
          </div>
        </div>
        <div class="product-card__color">
          Color:
          <div v-for="color in product.color" :key="color" class="product-card__color--item">
            <input
              type="radio"
              name="color"
              value="color"
              class="product-card__color--item-radio"
              @click="checkColor(color)"
            />
            <label for="color" class="product-card__color--label" :style="`background-color: ${color}`"></label>
          </div>
        </div>
        <div class="product-card__quantity">
          <div class="product-card__quantity--selector">
            <button class="product-card__quantity--btn" @click="counter('min')">-</button>
            <div class="product-card__quantity--number">{{ count }}</div>
            <button class="product-card__quantity--btn" @click="counter('max')">+</button>
          </div>
          <button class="product-card__add-to-cart" @click="setCart">Add to Cart</button>
        </div>
        <div class="product-card__additional-info">
          <div class="product-card__additional-info--item">SKU: SS001</div>
          <div class="product-card__additional-info--item">Category: Sofas</div>
          <div class="product-card__additional-info--item">Tags: Sofa, Home, Shop</div>
          <div class="product-card__additional-info--item">Share: Facebook and more</div>
        </div>
      </div>
    </div>
    <div class="product-card__footer">
      <div class="product-card__footer--items">
        <div class="product-card__footer--item">Description</div>
        <div class="product-card__footer--item">Additional Information</div>
        <div class="product-card__footer--item">Rewiews</div>
      </div>
      <div class="product-card__footer--text">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
        unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7
        pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
        clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow
        you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables
        easy and stylish travel.
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import './product-card.scss';

export default {
  name: 'ProductCardPage',

  data() {
    return {
      size: '',
      color: '',
      count: 0
    };
  },

  methods: {
    ...mapActions(['GET_PRODUCT_FROM_DATA']),
    ...mapMutations(['setProductsInCart']),

    checkSize(size) {
      this.size = size;
      console.log(this.size);
    },

    checkColor(color) {
      this.color = color;
      console.log(this.color);
    },

    counter(value) {
      if (value === 'max') {
        this.count++;
      } else if (value === 'min' && this.count !== 0) {
        this.count--;
      }
    },

    setCart() {
      if (this.count !== 0) {
        for (let i = this.count; i > 0; i--) {
          this.setProductsInCart([this.product.id, true]);
          console.log('added');
        }
      }
    }
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
