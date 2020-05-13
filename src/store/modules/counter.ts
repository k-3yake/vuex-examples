import {Module, MutationTree} from 'vuex';
import {RootState} from '@/store/index'

interface CounterState {
  count: number
}

export class CounterStore implements Module<CounterState, RootState> {
  namespaced = true
  state: CounterState = {count: 0}
  mutations: MutationTree<CounterState> = {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  }
}


