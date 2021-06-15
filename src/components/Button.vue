<template>
  <div :class="[$style.button]">
    <v-btn
    color="#00a89b"
    dark
    :ripple="false"
    @click="showAddForm"
  >
  Add new cost <v-icon dark>mdi-plus</v-icon>
  </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showAddForm () {
      this.show = !this.show
      this.$emit('showNewCostForm', this.show)
    }
  }
}
</script>

<style lang='scss' module>
// .button {
//   margin-bottom: 20px;
//   &__btn {
//     font-weight: 100;
//     border: none;
//     font-size: 18px;
//     color: #fff;
//     background-color: #00a89b;
//     box-shadow: 2px 2px 5px 1px rgb(173, 173, 173);
//     padding: 10px 0px;
//     text-transform: uppercase;
//     width: 50%;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: all 1s ease;
//   }
// }
</style>
