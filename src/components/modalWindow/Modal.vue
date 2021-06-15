<template>
  <div :class="[$style.modal]">
    <div :class="[$style.modal__overlay]"></div>
    <div :class="[$style.modal__content]">
      <PaymentForm
        :class="[$style.modal__form]"
        v-if="name === 'PaymentForm'"
        :idItem="settings && settings.id"
        btn="save"
      />
      <button
        :class="[$style.modal__close]"
        @click="onClose"
      >close
      </button>
    </div>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm'

export default {
  components: {
    PaymentForm
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
.modal {
  position: absolute;
  // border: 1px solid #000;
  width: 100%;
  height: 100vh;
  &__overlay {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(50,50,50,0.5);
  }
  &__content {
    z-index: 10;
    display: flex;
    position: relative;
    // transform: translate(50%, 50%);
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
  }
  &__form {
    transform: translate(-50%, -50%);
  }
  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
