<template>
  <div id='app' :class="[$style.app]">
    <h1 :class="[$style.app__header]">My personal costs</h1>
    <main>
      <ButtonNewCost @showNewCostForm ="showForm"/>
      <PaymentForm @add="onDataAdded" v-if="showFormCost"/>
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import ButtonNewCost from './components/Button'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    ButtonNewCost
  },
  data () {
    return {
      showFormCost: false,
      paymentsList: [
        {
          id: 1,
          date: '20.03.2020',
          category: 'Food',
          price: 169
        },
        {
          id: 2,
          date: '21.03.2020',
          category: 'Navigation',
          price: 50
        },
        {
          id: 3,
          date: '22.03.2020',
          category: 'Sport',
          price: 450
        }
      ]
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    showForm (value) {
      this.showFormCost = value
    }
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
