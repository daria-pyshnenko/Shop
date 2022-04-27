<template>
  <div>
        <h1> {{ product.title }}</h1>
    <router-link :to="{name: 'products'}">Back to products</router-link>
    <hr>
    <div class="alert alert-success"> {{ product.price }}</div>
    <button class="btn btn-primary"
            @click="addToCart(product.idProduct)"
            v-if="inCart.indexOf(product.idProduct) === -1" >
      Add to cart
    </button>
    <button class="btn btn-warning"
            @click="removeFromCart(product.idProduct)"
            v-else>
      Remove from cart
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";


export default {
  name: "Product",
  computed: {
    ...mapGetters("cart", {
      inCart: 'products'
    }),
    id() {
      return this.$route.params.id
    },
    product() {
      return this.$store.getters['products/item'](this.id)
    }
  },
  methods: {
    ...mapActions("cart", {
      addToCart: 'add',
      removeFromCart: 'remove'
    }),
  }
}
</script>

<style scoped>

</style>