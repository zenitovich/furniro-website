<template>
    <div class="shop-cart">
        <img v-bind:src=product_data.image class="shop-cart__image">
        <div class="shop-cart__name">{{ product_data.name }}</div>
        <div class="shop-cart__kind">{{ product_data.kind }}</div>
        <div class="shop-cart__price">Rp {{ product_data.price }}
            <div class="shop-cart__old-price">Rp {{ product_data.oldPrice }}</div>
        </div>
<!--        <div class="shop-cart__type">{{ product_data.status.type}}</div>-->
        <div class="shop-cart__quantity">- {{ product_data.status.quantity }}</div>
    </div>
</template>

<script>
export default {
  name: "Shop-cart",
  props: {
    product_data: {
      status: {
        quantity: '',
      },
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
