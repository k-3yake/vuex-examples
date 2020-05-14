import Vue from 'vue';
import Vuex, {Module, MutationTree, StoreOptions} from 'vuex';
import {CounterStore} from '@/store/modules/counter/counter'
import {ProductsStore} from '@/store/modules/shoppingcart/products'
import {CartStore} from '@/store/modules/shoppingcart/cart';

Vue.use(Vuex);

export interface RootState {
}

const rootStore: StoreOptions<RootState> = {
  modules: {
    'counter': new CounterStore(),
    'products': new ProductsStore(),
    'cart': new CartStore()
  },
}

export default new Vuex.Store<RootState>(rootStore)

