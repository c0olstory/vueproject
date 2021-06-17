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
                :close-on-content-click="true"
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
  methods: {
    ...mapMutations([
      'addData',
      'updateData'
    ]),
    save () {
      const data = {
        id: 0,
        date: this.date,
        category: this.category,
        price: this.price
      }
      this.addData(data)
      this.$emit('showNewCostForm', this.show)
    },
    close () {
      this.$emit('showNewCostForm', this.show)
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList',
      'getPaymentsList'
    ]),
    getDateUser () {
      return new Date().toISOString().substr(0, 10)
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
    this.date = this.getDateUser
  }
}
</script>

<style lang="scss" module>
</style>
