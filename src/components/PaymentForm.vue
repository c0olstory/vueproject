<template>
  <v-card
    class="my-5"
    width="500"
  >
      <v-card-title>
        <span class="text-h5">Add Item</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
            <v-select
              :items="getCategoryList"
              v-model="category"
              label="Category"
            ></v-select>
              <!-- <v-text-field
                v-model="category"
                label="Category"
              ></v-text-field> -->
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="price"
                label="Price"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="close"
        >
          Cancel
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- <div :class="[$style.paymentform]">
      <input :class="[$style.paymentform__input]" placeholder="Date" v-model="date">
      <select :class="[$style.paymentform__input]" v-model="category">
        <option v-for="(option, index) in getCategoryList" :key="index" :value="option">{{ option }}</option>
      </select>
      <input :class="[$style.paymentform__input]" placeholder="Price" v-model.number="price">
      <button :class="[$style.paymentform__button]" @click="save">
        {{ btn }}
        <span :class="[$style.paymentform__span]"  v-if="btn === 'add'">+</span>
      </button>
    </div> -->
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: 0,
      date: '',
      category: '',
      price: null,
      show: false
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
      this.addData(data)
      // this.$modal.close()
      // if (this.idItem) {
      //   data.id = this.idItem
      //   this.updateData(data)
      //   this.$modal.close()
      // } else {
      //   this.addData(data)
      //   this.$modal.close()
      // }
      // const event = this.idItem ? 'updateData' : 'addData'
      // this.$store.commit(event, data)
      this.$emit('showNewCostForm', this.show)
    },
    close () {
      // this.dialog = !this.dialog
      this.$emit('showNewCostForm', this.show)
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
    // if (this.idItem) {
    //   const item = this.getPaymentsList.find(item => item.id === this.idItem)
    //   if (item) {
    //     this.date = item.date
    //     this.category = item.category
    //     this.price = item.price
    //   }
    // }
    // console.log(this.dialog, 'dialog')
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
// .paymentform {
//   display: flex;
//   flex-direction: column;
//   width: 250px;
//   &__input {
//     color: #000;
//     box-shadow: 2px 2px 5px 1px #ccc;
//     border: none;
//     border-radius: 3px;
//     padding: 10px;
//     margin-bottom: 10px;
//     transition: all 1s ease;
//     &:focus {
//       box-shadow: 2px 2px 5px 1px #000;
//       outline: none;
//     }
//   }
//   &__button {
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
//     margin-bottom: 20px;
//     &:hover {
//       box-shadow: 2px 2px 5px 1px #000;
//     }
//   }
//   &__span {
//     margin-left: 30px;
//   }
// }
</style>
