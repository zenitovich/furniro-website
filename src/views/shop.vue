<template>
  <div class="shop">
    <div class="shop-header">
      <div class="shop-header__filter">
        <img
          :src="
            showLikedProducts
              ? require('../assets/icons/red-like.svg')
              : require('../assets/icons/likes.svg')
          "
          class="shop-header__filter--likes"
          @click="showLikedProducts = !showLikedProducts"
          alt="likes"
        />
        <div class="shop-header__filter--border"></div>
        <div class="shop-header__filter--results">
          {{ numberOfLikes }} results
        </div>
      </div>
      <div class="shop-header__sort">
        <div class="shop-header__sort--text">Short by</div>
        <input
          type="text"
          v-model="searchString"
          placeholder="Default"
          class="shop__sort--input"
        />
      </div>
    </div>
    <div class="shop-cards">
      <shop-card
        v-for="product in productsToShow"
        :key="product.id"
        :productData="product"
      >
      </shop-card>
    </div>
    <div class="shop-footer">
      <div class="shop-footer__pagination">
        <div class="shop-footer__pagination--item" @click="page = 1">1</div>
        <div
          class="shop-footer__pagination--item"
          v-if="arrOfPages.length > 1"
          @click="page = 2"
        >
          2
        </div>
        <div
          class="shop-footer__pagination--item"
          v-if="arrOfPages.length > 2"
          @click="page = 3"
        >
          3
        </div>
        <div
          class="shop-footer__pagination--item"
          v-if="page < arrOfPages.length"
          @click="page = page + 1"
        >
          Next
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShopCard from '@/components/shop-card.vue'
import './shop.scss'

export default {
  name: 'shop-page',
  components: { ShopCard },

  data() {
    return {
      page: 1,
      searchString: '',
      arrOfPages: [],
      showLikedProducts: false
    }
  },

  computed: {
    ...mapGetters(['products', 'likedProducts']),

    filteredProducts() {
      if (this.showLikedProducts) {
        return this.products.filter(
          (product) =>
            this.likedProducts.includes(product.id) &&
            product.name.includes(this.searchString)
        )
      } else {
        return this.products.filter((product) =>
          product.name.includes(this.searchString)
        )
      }
    },

    productsToShow() {
      const quantityOfProductsPerPage = 16
      const start = (this.page - 1) * quantityOfProductsPerPage
      const end = this.page * quantityOfProductsPerPage

      this.getArrayOfPages(quantityOfProductsPerPage)

      return this.filteredProducts.slice(start, end)
    },

    numberOfLikes() {
      return this.showLikedProducts
        ? this.likedProducts.length
        : this.products.length
    }
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_DATA']),

    getArrayOfPages(quantityOfProductsPerPage) {
      const arrOfPages = []
      let quantityOfPages = Math.ceil(
        this.products.filter((product) =>
          product.name.includes(this.searchString)
        ).length / quantityOfProductsPerPage
      )
      if (this.showLikedProducts) {
        quantityOfPages = Math.ceil(
          this.products.filter(
            (product) =>
              product.name.includes(this.searchString) &&
              this.likedProducts.includes(product.id)
          ).length / quantityOfProductsPerPage
        )
      }

      for (let i = quantityOfPages; i > 0; i--) {
        arrOfPages.push(i)
      }

      this.arrOfPages = arrOfPages
    }
  },

  mounted() {
    this.GET_PRODUCTS_FROM_DATA()
  },

  beforeCreate() {
    this.$route.meta.layout = 'DefaultLayout'
  },

  watch: {
    searchString() {
      this.page = 1
    },

    showLikedProducts() {
      this.page = 1
    }
  }
}
</script>

<style scoped></style>
