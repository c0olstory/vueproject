<template>
  <v-dialog
    v-model="dialog"
    click:outside="close"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Item</span>
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
                v-model="menu2"
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
                    outlined
                    rounded
                    dense
                    readonly
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
              v-model="category"
              :items="getCategoryList"
              outlined
              rounded
              dense
              menu-props="auto"
              :label="category"
            ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                outlined
                rounded
                dense
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
  </v-dialog>
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
      dialog: false,
      dateDialog: false,
      menu2: false
    }
  },
  props: {
    itemEdit: Object,
    idItem: Number
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
      if (this.idItem) {
        data.id = this.idItem
        this.updateData(data)
        this.dialog = !this.dialog
        this.$modal.close()
      } else {
        this.addData(data)
        this.dialog = !this.dialog
      }
      this.$emit('showNewCostForm', !this.show)
    },
    close () {
      this.dialog = !this.dialog
      this.$modal.close()
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList',
      'getPaymentsList'
    ])
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
    this.dialog = true
    if (this.idItem) {
      const item = this.getPaymentsList.find(item => item.id === this.idItem)
      if (item) {
        this.date = item.date
        this.category = item.category
        this.price = item.price
      }
    }
  }
}
</script>

<style lang="scss" module>
</style>
