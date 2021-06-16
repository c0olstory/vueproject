<template>
  <div :class="[$style.modal]">
    <div :class="[$style.modal__content]">
      <!-- <PaymentForm
        :class="[$style.modal__form]"
        v-if="name === 'PaymentForm'"
        :idItem="settings && settings.id"
        btn="save"
        :dialog="true"
      /> -->
      <EditItem
        v-if="name === 'EditForm'"
        :class="[$style.modal__form]"
        :idItem="settings && settings.id"
        btn="save"
      />
    </div>
  </div>
</template>

<script>
import EditItem from '../EditItem'

export default {
  components: {
    EditItem
  },
  props: {
    name: String,
    settings: Object
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  }
}
</script>

<style lang="scss" module>
// .modal {
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   &__overlay {
//     z-index: 1;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     background: rgba(50,50,50,0.5);
//   }
//   &__content {
//     z-index: 10;
//     display: flex;
//     position: relative;
//     background-color: #fff;
//     box-shadow: 0px 0px 5px 1px;
//     top: 50%;
//     left: 50%;
//     width: 400px;
//     transform: translate(-50%, -50%);
//   }
//   &__form {
//     transform: translate(-50%, -50%);
//   }
//   &__close {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//   }
// }
</style>
