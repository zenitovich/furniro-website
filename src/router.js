import shop from '@/views/shop/shop.vue';
import productCard from '@/views/product-card/product-card.vue';

export default [
  { path: '/shop', component: shop },
  { path: '/product-card/:id', component: productCard, meta: { layout: 'ProductCardLayout' } }
];
