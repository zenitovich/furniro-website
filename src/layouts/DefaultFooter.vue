<template>
  <footer class="footer">
    <div v-if="$route.meta.layout === 'DefaultLayout'" class="footer__advantages">
      <div class="footer__advantages--item">
        <div class="footer__advantages--item-logo">
          <img src="../assets/icons/quality.svg" />
        </div>
        <div class="footer__advantages--item-theme">
          High Quality
          <div class="footer__advantages--item-description">Crafted from top materials</div>
        </div>
      </div>
      <div class="footer__advantages--item">
        <div class="footer__advantages--item-logo">
          <img src="../assets/icons/protection.svg" />
        </div>
        <div class="footer__advantages--item-theme">
          Warranty Protection
          <div class="footer__advantages--item-description">Over 2 years</div>
        </div>
      </div>
      <div class="footer__advantages--item">
        <div class="footer__advantages--item-logo">
          <img src="../assets/icons/shipping.svg" />
        </div>
        <div class="footer__advantages--item-theme">
          Free Shipping
          <div class="footer__advantages--item-description">Order over 150$</div>
        </div>
      </div>
      <div class="footer__advantages--item">
        <div class="footer__advantages--item-logo">
          <img src="../assets/icons/support.svg" />
        </div>
        <div class="footer__advantages--item-theme">
          24/7 Support
          <div class="footer__advantages--item-description">Dedicated Support</div>
        </div>
      </div>
    </div>
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
        <a v-for="link in arrayOfLinks" :key="link" class="footer__menu--links-item" @click="$router.push(`../${link}`)"
          >{{ link }}
        </a>
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
  </footer>
</template>

<script>
export default {
  name: 'DefaultFooter',
  data() {
    return {
      arrayOfLinks: ['home', 'shop', 'about', 'contact']
    };
  },

  methods: {
    subscribed() {
      alert('You subscribed!');
    }
  }
};
</script>

<style scoped lang="scss">
@import 'default-layout.scss';
</style>
