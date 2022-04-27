<template>
  <div class="form-group">
    <label>{{ name }}</label>
    <i v-if="activated" class="fa"
       :class="validClass"></i>
    <input type="text" class="form-control" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name:"Input",
  props: ['name', 'value', 'pattern'],
  data() {
    return {
      activated: this.value !== '',
    }
  },
  mounted() {
    this.$emit('changeStatus', this.isValid)
  },
  methods: {
    onInput(e) {
      this.$emit('update:value', e.target.value)
      this.activated = true;
    },
  },
  computed: {
    isValid(){
      return this.pattern.test(this.value);
    },
    validClass() {
      return this.isValid ? 'fa-solid fa-check-circle text-success' :
          'fa-solid fa-circle-exclamation text-danger';
    },
  },
  watch:{
    isValid(){
      this.$emit('changeStatus',  this.isValid)
    }
  }
}
</script>