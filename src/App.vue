<template>
  <div id='app' :class="[$style.app]">
    <header>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/dashboard/add/payment/Food?value=200">add Food</router-link>
      <router-link to="/dashboard/add/payment/Transport?value=50">add Transport</router-link>
      <router-link to="/dashboard/add/payment/Entertainment?value=2000">add Entertainment</router-link>
      <router-link to="/notfound">404</router-link>
    </header>
    <h1 :class="[$style.app__header]">My personal costs</h1>
    <main>
      <router-view />
      <!-- <ButtonNewCost @showNewCostForm ="showForm"/>
      <PaymentForm @add="onDataAdded" v-if="showFormCost"/>
      <PaymentsList /> -->
    </main>
  </div>
</template>

<script>
// import PaymentsList from './components/PaymentsList'
// import PaymentForm from './components/PaymentForm'
// import ButtonNewCost from './components/Button'

// import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    // PaymentsList,
    // PaymentForm,
    // ButtonNewCost
  },
  data () {
    return {
      // showFormCost: false
    }
  },
  methods: {
    // ...mapActions([
    //   'fetchData'
    // ]),
    // onDataAdded (data) {
    //   this.paymentsList.push(data)
    // },
    // showForm (value) {
    //   this.showFormCost = value
    // }
  },
  mounted () {
    // this.fetchData()
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
