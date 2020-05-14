<template>
  <div class="about">
    <h1>This is an counter page</h1>
    <div>
      {{ count }}
    </div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Counter extends Vue {
    get count() {
      return this.$store.state.counter.count;
    }

    public increment() {
      this.$store.commit('counter/increment');
    }

    public decrement() {
      this.$store.commit('counter/decrement');
    }
  }
</script>
