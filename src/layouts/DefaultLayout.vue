<template>
  <div class="default-layout">
    <div class="header-component">
      <div class="header">
        <div class="header__logo">
          <img src="../assets/icons/logo.svg" alt="logo" />
        </div>
        <div class="header__list">
          <div class="header__list--item">Home</div>
          <div class="header__list--item">Shop</div>
          <div class="header__list--item">About</div>
          <div class="header__list--item">Contact</div>
        </div>
        <div class="header__icons">
          <!--                  <div class="header__icons&#45;&#45;item"><img src="../assets/icons/profile.svg" alt="profile"/></div>-->
          <div class="header__icons--item">
            <img src="../assets/icons/search.svg" alt="search" />
          </div>
          <!--                  <div class="header__icons&#45;&#45;item"><img src="../assets/icons/likes.svg" alt="likes"/></div>-->
          <div class="header__icons--item">
            <img src="../assets/icons/cart.svg" alt="cart" />
          </div>
        </div>
      </div>
      <div class="header-background-image">Shop</div>
    </div>
    <section class="content">
      <slot />
    </section>
    <div class="footer">
      <div class="footer__advantages">
        <div class="footer__advantages--item">
          <div class="footer__advantages--item-logo">
            <img src="../assets/icons/quality.svg" />
          </div>
          <div class="footer__advantages--item-theme">
            High Quality
            <div class="footer__advantages--item-description">
              Crafted from top materials
            </div>
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
            <div class="footer__advantages--item-description">
              Order over 150$
            </div>
          </div>
        </div>
        <div class="footer__advantages--item">
          <div class="footer__advantages--item-logo">
            <img src="../assets/icons/support.svg" />
          </div>
          <div class="footer__advantages--item-theme">
            24/7 Support
            <div class="footer__advantages--item-description">
              Dedicated Support
            </div>
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
          links
          <div class="footer__menu--links-item">Home</div>
          <div class="footer__menu--links-item">Shop</div>
          <div class="footer__menu--links-item">About</div>
          <div class="footer__menu--links-item">Contact</div>
        </div>
        <div class="footer__menu--help">
          Help
          <div class="footer__menu--help-item">Payment Options</div>
          <div class="footer__menu--help-item">Returns</div>
          <div class="footer__menu--help-item">Privacy Policies</div>
        </div>
        <div class="footer__menu--newsletter">
          NewsLetter
          <input
            class="footer__menu--newsletter-email"
            type="email"
            placeholder="Enter Your Email Adres."
          />
          <input
            class="footer__menu--newsletter-btn"
            type="button"
            value="SUBSCRIBE"
          />
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
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped></style>
