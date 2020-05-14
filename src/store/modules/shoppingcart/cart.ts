import {buy, Product} from '@/api/shop';
import {ActionTree, Module, MutationTree} from 'vuex';
import {RootState} from '@/store';

interface CartState {
  products: Product[]
}

export class CartStore implements Module<CartState,RootState>{
  namespaced = true
  state:CartState = { products:[] }
  actions: ActionTree<CartState, RootState> = {
    buy( {commit,state}) {
      buy(state.products).then((result) => alert(result))
      commit('removeAll')
    }
  }
  mutations: MutationTree<CartState> = {
    removeAll(state) {
      state.products = []
    },
    add(state,product:Product) {
      state.products.push(product)
    }
  }
}
