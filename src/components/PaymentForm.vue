<template>
  <div :class="[$style.paymentform]">
     <input :class="[$style.paymentform__input]" placeholder="Date" v-model="date">
     <input :class="[$style.paymentform__input]" placeholder="Category" v-model="category">
     <input :class="[$style.paymentform__input]" placeholder="Price" v-model.number="price">
     <button :class="[$style.paymentform__button]" @click="save">
       Add
       <span :class="[$style.paymentform__span]">+</span>
       </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
    }
  }
}
</script>

<style lang="scss" module>
.paymentform {
  display: flex;
  flex-direction: column;
  width: 250px;
  &__input {
    color: #ccc;
    box-shadow: 2px 2px 5px 1px #ccc;
    border: none;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
    transition: all 1s ease;
    &:focus {
      box-shadow: 2px 2px 5px 1px #000;
      outline: none;
    }
  }
  &__button {
    font-weight: 100;
    border: none;
    font-size: 18px;
    color: #fff;
    background-color: #00a89b;
    box-shadow: 2px 2px 5px 1px rgb(173, 173, 173);
    padding: 10px 0px;
    text-transform: uppercase;
    width: 50%;
    border-radius: 5px;
    cursor: pointer;
    transition: all 1s ease;
    margin-bottom: 20px;
    &:hover {
      box-shadow: 2px 2px 5px 1px #000;
    }
  }
  &__span {
    margin-left: 30px;
  }
}
</style>
