<template>
  <div :class="[$style.paymentform]">
      <input :class="[$style.paymentform__input]" placeholder="Date" v-model="date">
      <select :class="[$style.paymentform__input]" v-model="category">
        <!-- <option disabled value="">Выберите один из вариантов</option> -->
        <option v-for="(option, index) in getCategoryList" :key="index" :value="option">{{ option }}</option>
      </select>
      <input :class="[$style.paymentform__input]" placeholder="Price" v-model.number="price">
      <button :class="[$style.paymentform__button]" @click="save">
        {{ btn }}
        <span :class="[$style.paymentform__span]"  v-if="btn === 'add'">+</span>
      </button>
      <!-- <button :class="[$style.paymentform__button]" @click="editItem" v-else>
        {{ btn }}
      </button> -->
    </div>
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: 0,
      date: '',
      category: 'Entertainment',
      price: null
    }
  },
  props: {
    itemEdit: Object,
    btn: String,
    idItem: Number
  },
  methods: {
    ...mapMutations([
      'addData',
      'updateData'
      // 'editData'
    ]),
    save () {
      const data = {
        id: 0,
        date: this.date,
        category: this.category,
        price: this.price
      }
      if (this.idItem) {
        data.id = this.idItem
        this.updateData(data)
        this.$modal.close()
      } else {
        this.addData(data)
      }
      // const event = this.idItem ? 'updateData' : 'addData'
      // this.$store.commit(event, data)
      this.$emit('showNewCostForm', !this.show)
    }
    // editItem () {
    //   const data = {
    //     id: this.id,
    //     date: this.date,
    //     category: this.category,
    //     price: this.price
    //   }
    //   this.$store.commit('editData', data)
    //   this.$contextMenu.close()
    // }
  },
  computed: {
    ...mapGetters([
      'getCategoryList',
      'getPaymentsList'
    ]),
    getDateUser () {
      const date = new Date()
      let day = date.getDate()
      let month = date.getMonth() // я только не понял почему месяц берется на 1 меньше чем есть
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
  watch: {
    '$route.params.category': function () {
      this.category = this.$route.params.category
    },
    '$route.query.value': function () {
      this.price = this.$route.query.value
    }
  },
  mounted () {
    if (this.idItem) {
      const item = this.getPaymentsList.find(item => item.id === this.idItem)
      if (item) {
        this.date = item.date
        this.category = item.category
        this.price = item.price
      }
    }
    // Сделал все как в методичке и выдает ошибку loadCategories не функция, почему?
    // if (!this.getCategoryList.length) {
    //   this.loadCategories()
    // }
    // this.date = this.getDateUser
    // this.category = this.$route.params.category
    // this.price = this.$route.query.value
    // if (this.itemEdit) {
    //   this.id = this.itemEdit.id
    //   this.date = this.itemEdit.date
    //   this.category = this.itemEdit.category
    //   this.price = this.itemEdit.price
    // }
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
