<template>
  <v-row>
    <v-col>
      <div class="text-h5 text-md-h3 my-8">My personal Costs</div>
      <v-btn
        :ripple="false"
        dark
        depressed
        color="#00a89b"
        @click="showForm(!showFormCost)"
      >
        Add new cost
      </v-btn>
      <PaymentForm
        @add="onDataAdded"
        @showNewCostForm ="showForm"
        v-if="showFormCost"
      />
      <PaymentsList />
    </v-col>
    <v-col>
      <Diagram class="my-8" v-if="loaded"/>
    </v-col>
  </v-row>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm'
import Diagram from '../components/Diagram'

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      showFormCost: false,
      loaded: false
    }
  },
  components: {
    PaymentsList,
    PaymentForm,
    Diagram
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    showForm (value) {
      this.showFormCost = value
    }
  },
  mounted () {
    this.fetchData()
    this.loaded = true
  }
}
</script>

<style>

</style>
