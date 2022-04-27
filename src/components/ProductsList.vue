<template>
  <div>
    <h1>Products</h1>
    <hr>
        <div class="row">
          <div class="col col-sm-4"
               v-for="product in products">
            <router-link tag="h3" :to="'/product/' + product.idProduct">
              <a href="">{{product.title}}</a>
            </router-link>

            <h4>{{product.price}}</h4>
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
        </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: "ProductsList",
  computed: {
    ...mapGetters("cart", {
      inCart: 'products'
    })
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
.row {
  padding-left: 15px;
}
</style>