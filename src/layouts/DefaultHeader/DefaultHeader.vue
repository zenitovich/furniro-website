<template>
  <header class="header-component">
    <div class="header">
      <div class="header__logo">
        <img src="../../assets/icons/logo.svg" alt="logo" />
      </div>
      <div class="header__list">
        <a v-for="link in arrayOfLinks" :key="link" class="header__list--item" @click="$router.push(`../${link}`)">{{
          link
        }}</a>
      </div>
      <div class="header__icons">
        <!--                  <div class="header__icons&#45;&#45;item"><img src="../assets/icons/profile.svg" alt="profile"/></div>-->
        <div v-if="disableSearchInput" class="header__icons--item">
          <img src="../../assets/icons/search.svg" alt="search" @click="disableSearchInput = false" />
        </div>
        <div v-else class="header__icons--item">
          <input v-model="nameOfPage" type="text" placeholder="home" @keydown.enter="selectPage" />
        </div>
        <!--                  <div class="header__icons&#45;&#45;item"><img src="../assets/icons/likes.svg" alt="likes"/></div>-->
        <div class="header__icons--item">
          <div class="header__icons--item-cart">
            {{ productsInCart.length }}
          </div>
          <a @click="$router.push('/cart')">
            <img src="../../assets/icons/cart.svg" alt="cart" />
          </a>
        </div>
      </div>
    </div>
    <div v-if="$route.meta.layout === 'DefaultLayout'" class="header-background-image">{{ getLocation }}</div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { ARRAY_OF_PAGES } from '@/constants';

export default {
  name: 'DefaultHeader',

  data() {
    return {
      disableSearchInput: true,
      nameOfPage: '',
      arrayOfLinks: ['home', 'shop', 'about', 'contact']
    };
  },

  computed: {
    ...mapGetters(['productsInCart']),

    getLocation() {
      return this.$route.path.slice(1);
    }
  },

  methods: {
    selectPage() {
      if (ARRAY_OF_PAGES.includes(this.nameOfPage)) {
        this.$router.push(this.nameOfPage);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import 'DefaultHeader';
</style>
