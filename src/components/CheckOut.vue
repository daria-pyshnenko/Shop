<template>
  <div>
    <form @submit.prevent="onSubmit" v-if="!formSubmited"
          style="width: 50%; margin: 0 auto">
      <h1>Order now</h1>
      <div class="progress">
        <div class="progress-bar" :style="progressWidth"></div>
      </div>
      <app-input v-for="(item, index) in info"
                 :key="index" :name="item.name" :pattern="item.pattern" :value="item.value"
                 @changeStatus="onChangeStatus(index, $event)"
                 @update:value="onChangeValue(index, $event)"
                 @input="validCnt">
      </app-input>
      <button class="btn" :class="btnClass" :disabled="validCnt<info.length" @click="onSubmit">
        {{ btnText }}
      </button>
    </form>
    <div v-else>
      <h2>Thank you, {{name}}</h2>
     <h3>Your order is accepted</h3>
      <h4 v-for="product in products">{{product.title}}</h4>
    </div>
  </div>
</template>

<script>
import AppInput from './Input.vue'
import {mapGetters} from 'vuex'

export default {
  name: "CheckOut",
  components: {
    AppInput
  },
  methods: {
    onChangeStatus(index, status) {
      this.$store.commit('check/onChangeStatus', {
        i: index,
        status: status
      })
    },
    onChangeValue(index, value) {
      this.$store.commit('check/onChangeValue', {
        i: index,
        value: value
      })
    },
    onSubmit() {
      this.$store.dispatch('check/submit')
    }
  },
  computed: {
    ...mapGetters("check",{
      info: 'info',
      formSubmited: 'formSubmited',
      validCnt: 'validCnt',
      formProcess:'formProcess',
      name: 'name'
    }),
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
    progressWidth() {
      return {
        width: (this.validCnt / this.info.length * 100) + '%'
      }
    },
    btnText() {
      return this.formProcess ? 'Loading' : 'Send data'
    },
    btnClass() {
      return this.formProcess ? 'btn-secondary' : ' btn-primary'
    }
  }
}
</script>

<style scoped>

</style>