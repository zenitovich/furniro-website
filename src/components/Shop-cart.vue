<template>
  <div class="shop-cart">
    <div class="shop-cart__options">
      <div class="shop-cart__options--add-to-cart">Add to cart</div>
      <img
        src="../assets/icons/like-in-cart.svg"
        class="shop-cart__options--like"
        @click="this.processLike"
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
import { mapMutations } from 'vuex'

export default {
  name: 'Shop-cart',

  methods: {
    ...mapMutations(['addLikedProduct']),
    processLike() {
      this.addLikedProduct(this.product_data.id)
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
