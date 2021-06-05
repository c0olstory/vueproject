<template>
  <div>
    <ButtonNewCost @showNewCostForm ="showForm"/>
    <PaymentForm @add="onDataAdded" v-if="showFormCost" :btn="'add'"/>
    <PaymentsList />
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm'
import ButtonNewCost from '../components/Button'

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      showFormCost: false
    }
  },
  components: {
    PaymentsList,
    PaymentForm,
    ButtonNewCost
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
  }
}
</script>

<style>

</style>
