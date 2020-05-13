import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Counter from '../components/Counter.vue';
import ShoppingCart from '@/components/ShoppingCartCounter.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
