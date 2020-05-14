<template>
    <div id="app">
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <ul>
            <li v-for="product in products">
                {{ product.title}}
                <br>
                <button @click="addCart(product)">
                    Add to cart
                </button>
            </li>
        </ul>
        <hr>
        <div class="cart">
            <h2>Your Cart</h2>
            <p style="display: none;">
                <i>
                    Please add some products to cart.
                </i>
            </p>
            <ul>
                <li v-for="product in cartProducts">
                    {{ product.title }}
                </li>
            </ul>
            <p>Total: ${{totalPrice}}</p>
            <p>
                <button @click="buy()">Checkout</button>
            </p>
            <p style="display: none;">Checkout .</p>
        </div>
    </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import {Product} from '@/api/shop';

  @Component
  export default class ShoppingCart extends Vue {

    created() {
      this.$store.dispatch('products/getProducts')
    }

    get products(): Product[] {
      return this.$store.state.products.products
    }

    addCart(product:Product) {
      this.$store.commit('cart/add',product)
    }

    buy() {
      this.$store.dispatch('cart/buy')
    }

    get cartProducts():Product[] {
      return this.$store.state.cart.products
    }

    get totalPrice() {
      if( this.cartProducts.length === 0) {
        return 0
      } else {
        return this.cartProducts.map( p => p.price).reduce( (pre,current,i,array) => pre + current)
      }
    }
  }
</script>

<style scoped>

</style>
