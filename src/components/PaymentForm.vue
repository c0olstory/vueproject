<template>
  <div :class="[$style.paymentform]">
    <input :class="[$style.paymentform__input]" placeholder="Date" v-model="date">
    <select :class="[$style.paymentform__input]" v-model="category">
      <option disabled value="">Выберите один из вариантов</option>
      <option v-for="(option, index) in getCategoryList" :key="index" :value="option">{{ option }}</option>
    </select>
    <input :class="[$style.paymentform__input]" placeholder="Price" v-model.number="price">
    <button :class="[$style.paymentform__button]" @click="save">
      Add
      <span :class="[$style.paymentform__span]">+</span>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: 0,
      date: '',
      category: 'Category',
      price: null
    }
  },
  methods: {
    ...mapMutations([
      'addData'
    ]),
    save () {
      const data = {
        id: 0,
        date: this.date,
        category: this.category,
        price: this.price
      }
      this.$store.commit('addData', data) //  в методичке эта строка выглядит как this.commit('addData', data), но у меня она не работает. почему?
      // а при обновлении страницы, данные которые мы добавили пропадают. это нормально?
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ]),
    getDateUser () {
      const date = new Date()
      let day = date.getDate()
      let month = date.getMonth()
      const year = date.getFullYear()
      if (day < 10) {
        day = `0${day}`
      }
      if (month < 10) {
        month = `0${month}`
      }
      const dateUser = `${day}.${month}.${year}`
      return dateUser
    }
  },
  actions: {
    ...mapActions([
      'loadCategories'
    ])
  },
  mounted () {
    // Сделал все как в методичке и выдает ошибку loadCategories не функция, почему?
    // if (!this.getCategoryList.length) {
    //   this.loadCategories()
    // }
    this.date = this.getDateUser
    this.category = this.$route.params.category
    console.log(this.$route, 'form category')
    // this.price = this.$route.params.price
  }
}
</script>

<style lang="scss" module>
.paymentform {
  display: flex;
  flex-direction: column;
  width: 250px;
  &__input {
    color: #000;
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
