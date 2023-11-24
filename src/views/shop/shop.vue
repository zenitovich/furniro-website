<template>
  <div class="shop">
    <div class="shop-header">
      <div class="shop-header__filter">
        <img
          :src="require(`../../assets/icons/${showLikedProducts ? 'red-like' : 'likes'}.svg`)"
          class="shop-header__filter--likes"
          alt="likes"
          @click="showLikedProducts = !showLikedProducts"
        />
        <div class="shop-header__filter--border"></div>
        <div class="shop-header__filter--results">{{ numberOfLikes }} results</div>
      </div>
      <div class="shop-header__sort">
        <div class="shop-header__sort--text">Short by</div>
        <input v-model="searchString" type="text" placeholder="Default" class="shop__sort--input" />
      </div>
    </div>
    <div class="shop-cards">
      <shop-card v-for="product in productsToShow" :key="product.id" :product-data="product"> </shop-card>
    </div>
    <div class="shop-footer">
      <div class="shop-footer__pagination">
        <div class="shop-footer__pagination--item" @click="page = 1">1</div>
        <div v-if="arrOfPages.length > 1" class="shop-footer__pagination--item" @click="page = 2">2</div>
        <div v-if="arrOfPages.length > 2" class="shop-footer__pagination--item" @click="page = 3">3</div>
        <div v-if="arrOfPages.length > 2" class="shop-footer__pagination--item" @click="page = 4">4</div>
        <div v-if="arrOfPages.length > 2" class="shop-footer__pagination--item" @click="page = 5">5</div>
        <div v-if="arrOfPages.length > 2" class="shop-footer__pagination--item" @click="page = 6">6</div>
        <div v-if="arrOfPages.length > 2" class="shop-footer__pagination--item" @click="page = 7">7</div>
        <div v-if="page < arrOfPages.length" class="shop-footer__pagination--item" @click="page = page + 1">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ShopCard from '@/components/shop-card/shop-card.vue';

export default {
  name: 'ShopPage',
  components: { ShopCard },

  data() {
    return {
      page: 1,
      searchString: '',
      arrOfPages: [],
      showLikedProducts: false
    };
  },

  computed: {
    ...mapGetters(['products', 'likedProducts']),

    filteredProducts() {
      if (this.showLikedProducts) {
        return this.products.filter(
          (product) =>
            this.likedProducts.includes(product.id) &&
            product.name.toLowerCase().includes(this.searchString.toLowerCase())
        );
      } else {
        return this.products.filter((product) => product.name.toLowerCase().includes(this.searchString.toLowerCase()));
      }
    },

    productsToShow() {
      const quantityOfProductsPerPage = 16;
      const start = (this.page - 1) * quantityOfProductsPerPage;
      const end = this.page * quantityOfProductsPerPage;

      this.getArrayOfPages(quantityOfProductsPerPage);

      return this.filteredProducts.slice(start, end);
    },

    numberOfLikes() {
      return this.showLikedProducts ? this.likedProducts.length : this.products.length;
    }
  },

  methods: {
    ...mapActions(['fetchProducts']),

    getArrayOfPages(quantityOfProductsPerPage) {
      const arrOfPages = [];
      let quantityOfPages = Math.ceil(
        this.products.filter((product) => product.name.includes(this.searchString)).length / quantityOfProductsPerPage
      );
      if (this.showLikedProducts) {
        quantityOfPages = Math.ceil(
          this.products.filter(
            (product) => product.name.includes(this.searchString) && this.likedProducts.includes(product.id)
          ).length / quantityOfProductsPerPage
        );
      }

      for (let i = quantityOfPages; i > 0; i--) {
        arrOfPages.push(i);
      }

      this.arrOfPages = arrOfPages;
    }
  },

  watch: {
    searchString() {
      this.page = 1;
    },

    showLikedProducts() {
      this.page = 1;
    }
  },

  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped lang="scss">
@import 'shop.scss';
</style>
