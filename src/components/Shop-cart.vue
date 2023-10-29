<template>
  <div class="shop-cart">
    <div class="shop-cart__options">
      <div
        class="shop-cart__options--add-to-cart"
        v-if="!inCart"
        @click="addToCart"
      >
        Add to cart
      </div>
      <div
        class="shop-cart__options--remove-from-cart"
        v-if="inCart"
        @click="removeFromCart"
      >
        Remove from cart
      </div>
      <img
        src="../assets/icons/like-in-cart.svg"
        class="shop-cart__options--like"
        @click="processLike"
        v-if="!like"
      />
      <img
        src="../assets/icons/unlike.svg"
        class="shop-cart__options--like"
        @click="unlike"
        v-if="like"
      />
    </div>
    <img v-bind:src="product_data.image" class="shop-cart__image" />
    <div class="shop-cart__name">{{ product_data.name }}</div>
    <div class="shop-cart__kind">{{ product_data.kind }}</div>
    <div class="shop-cart__price">
      Rp {{ product_data.price }}
      <div v-if="product_data.oldPrice" class="shop-cart__old-price">
        Rp {{ product_data.oldPrice }}
      </div>
    </div>
    <!--        <div class="shop-cart__type">{{ product_data.status.type}}</div>-->
    <div v-if="product_data.status" class="shop-cart__quantity">
      - {{ product_data.status.quantity }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Shop-cart',

  data() {
    return {
      like: false,
      inCart: false
    }
  },

  computed: {
    ...mapGetters(['LIKED_PRODUCTS', 'PRODUCTS_IN_CART'])
  },

  mounted() {
    if (this.LIKED_PRODUCTS.includes(this.product_data.id)) {
      this.like = true
    }
    if (this.PRODUCTS_IN_CART.includes(this.product_data.id)) {
      this.inCart = true
    }
  },

  methods: {
    ...mapMutations([
      'addLikedProduct',
      'removeLikedProducts',
      'addProductToCart',
      'removeProductFromCart'
    ]),
    processLike() {
      this.like = true
      this.addLikedProduct(this.product_data.id)
    },

    unlike() {
      this.like = false
      this.removeLikedProducts(this.product_data.id)
    },

    addToCart() {
      this.inCart = true
      this.addProductToCart(this.product_data.id)
    },

    removeFromCart() {
      this.inCart = false
      this.removeProductFromCart(this.product_data.id)
    }
  },

  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped></style>
