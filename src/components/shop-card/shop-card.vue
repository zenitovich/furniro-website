<template>
  <div class="shop-card">
    <div class="shop-card__options">
      <button
        :class="inCart ? 'shop-card__options--remove-from-cart' : 'shop-card__options--add-to-cart'"
        @click="setCart(inCart)"
      >
        {{ inCart ? 'Remove from cart' : 'Add to Cart' }}
      </button>
      <img
        :src="isLiked ? require('../../assets/icons/unlike.svg') : require('../../assets/icons/like-in-cart.svg')"
        class="shop-card__options--like"
        @click="setLike(isLiked)"
      />
    </div>
    <img :src="productData.image" class="shop-card__image" />
    <div class="shop-card__name" @click="$router.push(`/product-card/${productData.id}`)">{{ productData.name }}</div>
    <div class="shop-card__kind">{{ productData.kind }}</div>
    <div class="shop-card__price">
      Rp {{ productData.price }}
      <div v-if="productData.oldPrice" class="shop-card__old-price">Rp {{ productData.oldPrice }}</div>
    </div>
    <!--        <div class="shop-card__type">{{ product_data.status.type}}</div>-->
    <div v-if="productData.status" class="shop-card__quantity">- {{ productData.status.quantity }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ShopCard',

  computed: {
    ...mapGetters(['likedProducts', 'productsInCart']),

    isLiked(vm) {
      return vm.likedProducts.includes(vm.productData.id);
    },

    inCart(vm) {
      let result = vm.productsInCart.map((item) => item.productId);
      return result.includes(vm.productData.id);
    }
  },

  methods: {
    ...mapMutations(['setLikedProducts', 'setProductsInCart']),

    setCart(inCart) {
      this.setProductsInCart([this.productData.id, !inCart, 1]);
    },

    setLike(like) {
      like ? (like = false) : (like = true);
      this.setLikedProducts([this.productData.id, like]);
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
@import 'shop-card';
</style>
