<template>
  <div class="shop">
    <div class="shop-header">
      <div class="shop-header__filter">
        <img
          src="../assets/icons/likes.svg"
          class="shop-header__filter--likes"
          alt="likes"
        />
        <div class="shop-header__filter--border"></div>
        <div class="shop-header__filter--results">32 results</div>
      </div>
      <div class="shop-header__sort">
        <div class="shop-header__sort--text">Short by</div>
        <input
          type="text"
          v-model="filter"
          placeholder="Default"
          class="shop__sort--input"
        />
      </div>
    </div>
    <div class="shop-carts">
      <shop-cart
        v-for="product in filteredProducts"
        :key="product.id"
        v-bind:product_data="product"
      >
      </shop-cart>
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

import ShopCart from '@/components/Shop-cart.vue'

export default {
  name: 'shop-page',
  components: { ShopCart },

  data() {
    return {
      page: 1,
      filter: '',
      arrOfPages: []
    }
  },

  computed: {
    ...mapGetters(['PRODUCTS']),
    filteredProducts() {
      const quantityOfProductsPerPage = 16
      const start = (this.page - 1) * quantityOfProductsPerPage
      const end = this.page * quantityOfProductsPerPage
      const arrOfPages = []
      const quantityOfPages = Math.ceil(
        this.PRODUCTS.filter((product) => product.name.includes(this.filter))
          .length / quantityOfProductsPerPage
      )

      this.getArrayOfPages(arrOfPages, quantityOfPages)

      return this.PRODUCTS.filter((product) =>
        product.name.includes(this.filter)
      ).slice(start, end)
    }
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_DATA']),

    getArrayOfPages(arrOfPages, quantityOfPages) {
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
    filter() {
      this.page = 1
    }
  }
}
</script>

<style scoped></style>
