<template>
  <div>
    <h1>Cart</h1>
    <div v-if="empty" class="alert alert-warning">
      Your cart is empty
    </div>
    <template v-else>
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <td>Title</td>
          <td>Price</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products">
          <router-link tag="td" :to="'/product/' + product.idProduct">
            <a href="">{{product.title}}</a>
          </router-link>
          <td>{{ product.price }}</td>
        </tr>
        </tbody>
      </table>
      <button @click="orderNow()"
              class="btn btn-success">Order now</button>
    </template>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  computed: {
    ...mapGetters("products", {
      productsAll: 'items'
    }),
    ...mapGetters("cart", {
      productsInCart: 'products'
    }),
    products() {
      return this.productsAll.filter((elem) => {
        return this.productsInCart.indexOf(elem.idProduct) !== -1
      })
    },
    empty() {
      return this.products.length === 0
    }
  },
  methods: {
    orderNow(){
      this.$router.push('/checkOut')
    }
  },
}
</script>

<style scoped>

</style>