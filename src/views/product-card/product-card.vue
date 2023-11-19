<template>
  <main>
    <section>
      <div class="product-card">
        <img class="product-card__image" :src="product.image" />
        <div class="product-card__info">
          <h1 class="product-card__name">{{ product.name }}</h1>
          <div class="product-card__price">Rs. {{ product.price }}.00</div>
          <div class="product-card__rating">Rating: {{ product.rating }}</div>
          <div class="product-card__description">{{ product.description }}</div>
          <div class="product-card__size">
            Size:
            <div v-for="size in product.size" :key="size" class="product-card__size--item">
              <input
                :id="size"
                v-model="sizes"
                type="radio"
                name="size"
                :value="size"
                class="product-card__size--item-radio"
              />
              <label :for="size" class="product-card__size--label">{{ size }}</label>
            </div>
          </div>
          <div class="product-card__color">
            Color:
            <div v-for="color in product.color" :key="color" class="product-card__color--item">
              <input
                :id="color"
                v-model="colors"
                type="radio"
                name="color"
                :value="color"
                class="product-card__color--item-radio"
              />
              <label :for="color" class="product-card__color--label" :style="`background-color: ${color}`"></label>
            </div>
          </div>
          <div class="product-card__quantity">
            <div class="product-card__quantity--selector">
              <button v-if="count >= 1" class="product-card__quantity--btn" @click="counter('minus')">-</button>
              <span class="product-card__quantity--number">{{ count }}</span>
              <button v-if="count < 10" class="product-card__quantity--btn" @click="counter('plus')">+</button>
            </div>
            <button class="product-card__add-to-cart" @click="setCart">Add to Cart</button>
          </div>
          <ul class="product-card__additional-info">
            <li class="product-card__additional-info--item">SKU: {{ product.SKU }}</li>
            <li class="product-card__additional-info--item">Category: {{ product.category }}</li>
            <li v-if="product.tags" class="product-card__additional-info--item">Tags: {{ product.tags.join() }}</li>
            <li class="product-card__additional-info--item">
              Share:
              <a v-for="link in product.links" :key="link" class="product-card__additional-info--item-a" :href="link">{{
                cuteTheLink(link)
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="product-card__footer">
        <div class="product-card__footer--items">
          <!--          Переделать на радиокнопки!!!!!!!-->
          <label v-for="item in itemsInFooter" :key="item" :for="item" class="product-card__footer--item"
            >{{ item }}
            <input
              :id="item"
              v-model="itemInFooter"
              type="radio"
              name="itemInFooter"
              :value="item"
              class="product-card__footer--item-radio"
            />
          </label>
        </div>
        <p v-if="itemInFooter === 'Description'" class="product-card__footer--description">
          {{ product.description }}
        </p>
        <div v-if="itemInFooter === 'Additional Information'" class="product-card__footer--add-info">
          <div v-for="name in additionalInformation" :key="name" class="product-card__footer--add-info-item">
            {{ name }}: {{ product.additionalInformation[name] }}
          </div>
        </div>
        <div v-if="itemInFooter === 'Reviews'" class="product-card__footer--reviews">
          <div v-for="review in product.reviews" :key="review.name" class="product-card__footer--review">
            <div class="product-card__footer--review-name">Author: {{ review }}</div>
            <div class="product-card__footer--review-date">Review's date: {{ review.date }}</div>
            <div class="product-card__footer--review-rating">Product Rating: {{ review.rating }}</div>
            <div class="product-card__footer--review-comment">{{ review.comment }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ProductCardPage',

  data() {
    return {
      sizes: '',
      colors: '',
      count: 0,
      itemInFooter: '',
      itemsInFooter: ['Description', 'Additional Information', 'Reviews']
    };
  },

  computed: {
    ...mapGetters(['product']),

    additionalInformation() {
      return Object.keys(this.product.additionalInformation);
    }
  },

  methods: {
    ...mapActions(['fetchProduct']),
    ...mapMutations(['setProductsInCart']),

    counter(value) {
      if (value === 'plus') {
        this.count++;
      } else {
        this.count--;
      }
    },

    setCart() {
      if (this.count !== 0) {
        this.setProductsInCart([this.product.id, true, this.count]);
      }
    },

    cuteTheLink(link) {
      return link.slice(12).split('/')[0];
    }
  },

  mounted() {
    this.fetchProduct(`${this.$route.params.id}`);
  }
};
</script>

<style scoped lang="scss">
@import 'product-card.scss';
</style>
