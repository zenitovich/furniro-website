import shop from '@/views/shop/shop.vue';
import productCard from '@/views/product-card/product-card.vue';
import cart from '@/views/cart/cart.vue';
import checkout from '@/views/checkout/checkout.vue';

export default [
  { path: '/shop', component: shop, meta: { layout: 'DefaultLayout' } },
  { path: '/cart', component: cart, meta: { layout: 'DefaultLayout' } },
  { path: '/checkout', component: checkout, meta: { layout: 'DefaultLayout' } },
  { path: '/product-card/:id', component: productCard, meta: { layout: 'ProductCardLayout' } }
];
