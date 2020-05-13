import Vue from 'vue';
import Vuex, {Module, MutationTree, StoreOptions} from 'vuex';
import {CounterStore} from '@/store/modules/counter'

Vue.use(Vuex);

export interface RootState {
}

const rootStore: StoreOptions<RootState> = {
  modules: {
    'counter': new CounterStore()
  },
}

export default new Vuex.Store<RootState>(rootStore)

