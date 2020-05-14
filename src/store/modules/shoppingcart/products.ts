import {ActionTree, Module, MutationTree} from 'vuex';
import {RootState} from '@/store'
import {Product, getProducts} from '@/api/shop';

interface ProductsState {
  products: Product[]
}

export class ProductsStore implements Module<ProductsState, RootState> {
  namespaced = true
  state: ProductsState = { products:[] }
  mutations: MutationTree<ProductsState> = {
    setProducts(state, products) {
      state.products = products
    }
  }
  actions: ActionTree<ProductsState, RootState> = {
    getProducts({commit}) {
      getProducts().then((products) => {
        commit('setProducts',products)
      })
    }
  }
}


