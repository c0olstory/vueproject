<template>
  <div id='app' :class="[$style.app]">
    <h1 :class="[$style.app__header]">My personal costs</h1>
    <main>
      <ButtonNewCost @showNewCostForm ="showForm"/>
      <PaymentForm @add="onDataAdded" v-if="showFormCost"/>
      <PaymentsList />
      <PaginationBtn />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import ButtonNewCost from './components/Button'
import PaginationBtn from './components/Pagination'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    ButtonNewCost,
    PaginationBtn
  },
  data () {
    return {
      showFormCost: false
    }
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

<style lang='scss' module>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Arial";
  color: #000;
}
</style>
