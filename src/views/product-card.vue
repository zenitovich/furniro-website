<template></template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCardPage',

  methods: {
    ...mapActions(['GET_PRODUCT_FROM_DATA'])
  },

  mounted() {
    this.GET_PRODUCT_FROM_DATA(`${this.$route.path.slice(14)}`);
  }
};
</script>

<style scoped></style>
