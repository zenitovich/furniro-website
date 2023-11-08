<template>
  <div class="default-layout">
    <div class="header-component">
      <div class="header">
        <div class="header__logo">
          <img src="../assets/icons/logo.svg" alt="logo" />
        </div>
        <div class="header__list">
          <a href="../home" class="header__list--item">Home</a>
          <a href="../shop" class="header__list--item">Shop</a>
          <a href="../about" class="header__list--item">About</a>
          <a href="../contact" class="header__list--item">Contact</a>
        </div>
        <div class="header__icons">
          <!--                  <div class="header__icons&#45;&#45;item"><img src="../assets/icons/profile.svg" alt="profile"/></div>-->
          <div class="header__icons--item">
            <img
              v-if="disableSearchInput"
              src="../assets/icons/search.svg"
              alt="search"
              @click="disableSearchInput = false"
            />
          </div>
          <div v-if="disableSearchInput === false" class="header__icons--item">
            <input v-model="nameOfPage" type="text" placeholder="home" @keydown.enter="selectPage" />
          </div>
          <!--                  <div class="header__icons&#45;&#45;item"><img src="../assets/icons/likes.svg" alt="likes"/></div>-->
          <div class="header__icons--item">
            <div class="header__icons--item-cart">
              {{ productsInCart.length }}
            </div>
            <a href="cart">
              <img src="../assets/icons/cart.svg" alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="content">
      <slot />
    </section>
    <div class="footer">
      <div class="footer__menu">
        <div class="footer__menu--info">
          Furniro
          <div class="footer__menu--info-description">
            400 University Drive Suite 200 <br />
            CoralGables, <br />
            FL 33134 USA
          </div>
        </div>
        <div class="footer__menu--links">
          Links
          <a href="home" class="footer__menu--links-item">Home</a>
          <a href="shop" class="footer__menu--links-item">Shop</a>
          <a href="about" class="footer__menu--links-item">About</a>
          <a href="contact" class="footer__menu--links-item">Contact</a>
        </div>
        <div class="footer__menu--help">
          Help
          <div class="footer__menu--help-item">Payment Options</div>
          <div class="footer__menu--help-item">Returns</div>
          <div class="footer__menu--help-item">Privacy Policies</div>
        </div>
        <div class="footer__menu--newsletter">
          NewsLetter
          <input class="footer__menu--newsletter-email" type="email" placeholder="Enter Your Email Adress" />
          <input class="footer__menu--newsletter-btn" type="button" value="SUBSCRIBE" @click="subscribed" />
        </div>
      </div>
      <div class="footer__info">
        <div class="footer__info--line"></div>
        <div class="footer__info--text">2023 Furniro. All rights reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import './default-layout.scss';
import { ARRAY_OF_PAGES } from '@/constants';

export default {
  name: 'ProductCardLayout',

  data() {
    return {
      disableSearchInput: true,
      nameOfPage: ''
    };
  },

  computed: {
    ...mapGetters(['productsInCart']),

    getLocation() {
      return this.$route.path.slice(1);
    }
  },

  methods: {
    subscribed() {
      alert('You subscribed!');
    },

    selectPage() {
      if (ARRAY_OF_PAGES.includes(this.nameOfPage)) {
        this.$router.push({ path: `../${this.nameOfPage}` });
      }
    }
  }
};
</script>

<style scoped></style>
