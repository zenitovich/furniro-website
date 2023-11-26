<template>
  <div class="checkout">
    <div class="checkout__details">
      <h1 class="checkout__details--title">Billing Details</h1>
      <div class="checkout__details--names">
        <div class="checkout__details--names-block">
          <label class="checkout__details--label">First name</label>
          <input type="text" class="checkout__details--names-name" />
        </div>
        <div class="checkout__details--names-block">
          <label class="checkout__details--label">Last name</label>
          <input type="text" class="checkout__details--names-name" />
        </div>
      </div>
      <label class="checkout__details--label">Company name (optional)</label>
      <input type="text" class="checkout__details--item" />
      <label class="checkout__details--label">Country / Region</label>
      <select class="checkout__details--item">
        <option v-for="country in LIST_OF_COUNTRIES()" :key="country" :value="country">{{ country }}</option>
      </select>
      <label class="checkout__details--label">Street address</label>
      <input type="text" class="checkout__details--item" />
      <label class="checkout__details--label">Town / City</label>
      <input type="text" class="checkout__details--item" />
      <label class="checkout__details--label">Province</label>
      <select class="checkout__details--item">
        <option v-for="country in LIST_OF_COUNTRIES()" :key="country" :value="country">{{ country }}</option>
      </select>
      <label class="checkout__details--label">ZIP code</label>
      <input type="text" class="checkout__details--item" />
      <label class="checkout__details--label">Phone</label>
      <input type="tel" class="checkout__details--item" />
      <label class="checkout__details--label">Email</label>
      <input type="email" class="checkout__details--item" />
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
          <div class="checkout__order--info-price">Rs {{ getTotal }},000</div>
        </div>
        <div class="checkout__order--info-total">
          <div class="checkout__order--info-name">Total</div>
          <div class="checkout__order--info-final-price">Rs {{ getTotal }},000</div>
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
      <input type="button" class="checkout__order--btn" value="Place order" />
    </div>
  </div>
</template>

<script>
import { LIST_OF_COUNTRIES } from '@/constants';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CheckoutPage',

  computed: {
    ...mapGetters(['productsInCart', 'products']),

    getTotal() {
      let total = 0;
      this.mergedArray.forEach((p) => (total += p.price * p.quantity));
      console.log(total);
      return total;
    },

    mergedArray() {
      const filteredArray = this.filterArray(this.products);

      const mergedArray = this.productsInCart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: filteredArray.find((product) => product.id === item.productId)?.price,
        name: filteredArray.find((product) => product.id === item.productId)?.name
      }));
      console.log(mergedArray);
      return mergedArray;
    }
  },

  methods: {
    ...mapActions(['fetchProducts']),

    LIST_OF_COUNTRIES() {
      return LIST_OF_COUNTRIES;
    },

    filterArray(array) {
      return array.map((item) => {
        const { id, price, name } = item;
        return { id, price, name };
      });
    }
  },

  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped lang="scss">
@import 'checkout';
</style>
