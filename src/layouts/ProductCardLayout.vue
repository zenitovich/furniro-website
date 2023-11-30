<template>
  <div class="default-layout">
    <DefaultHeader></DefaultHeader>
    <section class="content">
      <slot />
    </section>
    <DefaultFooter></DefaultFooter>
  </div>
</template>

<script>
import DefaultHeader from '@/layouts/DefaultHeader/DefaultHeader.vue';
import DefaultFooter from '@/layouts/DefaultFooter/DefaultFooter.vue';

export default {
  name: 'ProductCardLayout',
  components: { DefaultFooter, DefaultHeader }
};
</script>

<style scoped></style>
