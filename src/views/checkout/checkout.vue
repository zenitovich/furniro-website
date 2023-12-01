<template>
  <form class="checkout" @submit="sendingData()">
    <div class="checkout__details">
      <h2 class="checkout__details--title">Billing Details</h2>
      <div class="checkout__details--names">
        <div class="checkout__details--names-block">
          <label class="checkout__details--label" for="first-name">First name</label>
          <input id="first-name" type="text" class="checkout__details--names-name" name="first-name" />
        </div>
        <div class="checkout__details--names-block">
          <label class="checkout__details--label" for="second-name">Last name</label>
          <input id="second-name" type="text" class="checkout__details--names-name" name="second-name" />
        </div>
      </div>
      <label class="checkout__details--label" for="company-name">Company name (optional)</label>
      <input id="company-name" type="text" class="checkout__details--item" name="company-name" />
      <label class="checkout__details--label" for="country">Country / Region</label>
      <select id="country" class="checkout__details--item" name="country">
        <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
      </select>
      <label class="checkout__details--label" for="address">Street address</label>
      <input id="address" type="text" class="checkout__details--item" name="address" />
      <label class="checkout__details--label" for="city">Town / City</label>
      <input id="city" type="text" class="checkout__details--item" name="city" />
      <label class="checkout__details--label" for="province">Province</label>
      <select id="province" class="checkout__details--item" name="province">
        <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
      </select>
      <label class="checkout__details--label" for="zip">ZIP code</label>
      <input id="zip" type="text" class="checkout__details--item" name="zip" />
      <label class="checkout__details--label" for="phone">Phone</label>
      <input id="phone" type="tel" class="checkout__details--item" name="phone" />
      <label class="checkout__details--label" for="email">Email</label>
      <input id="email" type="email" class="checkout__details--item" name="email" />
      <input type="text" class="checkout__details--item" placeholder="Additional Information" />
    </div>
    <div class="checkout__order">
      <div class="checkout__order--info">
        <div class="checkout__order--info-titles">
          <h1 class="checkout__order--info-title">Product</h1>
          <h1 class="checkout__order--info-title">Subtotal</h1>
        </div>
        <div v-for="product in mergedArray" :key="product.productId" class="checkout__order--info-products">
          <div class="checkout__order--info-product">
            {{ product.name }} <span style="color: black"> X {{ product.quantity }}</span>
          </div>
          <div class="checkout__order--info-price">Rs {{ product.price * product.quantity }},000</div>
        </div>
        <div class="checkout__order--info-total">
          <div class="checkout__order--info-name">Subtotal</div>
          <div class="checkout__order--info-price">Rs {{ totalPriceInCart }},000</div>
        </div>
        <div class="checkout__order--info-total">
          <div class="checkout__order--info-name">Total</div>
          <div class="checkout__order--info-final-price">Rs {{ totalPriceInCart }},000</div>
        </div>
      </div>
      <div class="checkout__order--description">
        <h1 class="checkout__order--description-title">Direct Bank Transfer</h1>
        <p class="checkout__order--description-text" style="color: lightgray">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your
          order will not be shipped until the funds have cleared in our account.
        </p>
        <p class="checkout__order--description-text">
          Your personal data will be used to support your experience throughout this website, to manage access to your
          account, and for other purposes described in our privacy policy.
        </p>
      </div>
      <input type="submit" class="checkout__order--btn" value="Place order" />
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CheckoutPage',

  computed: {
    ...mapGetters(['productsInCart', 'products', 'countries', 'totalPriceInCart'])
  },

  methods: {
    ...mapActions(['fetchProducts', 'fetchCountries']),

    sendingData() {
      console.log('data sent');
    }
  },

  mounted() {
    this.fetchProducts();
    this.fetchCountries();
  }
};
</script>

<style scoped lang="scss">
@import 'checkout';
</style>
