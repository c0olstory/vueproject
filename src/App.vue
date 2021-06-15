<template>
  <!-- <div id='app' :class="[$style.app]"> -->
  <v-app>
    <transition name="modal">
      <Modal v-if="modalShown" :name="modalShown" :settings="modalSettings" />
    </transition>
    <v-app-bar app flat>
      <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard/add/payment/Food?value=200">add Food</v-btn>
      <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard/add/payment/Transport?value=50">add Transport</v-btn>
      <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard/add/payment/Entertainment?value=2000">add Entertainment</v-btn>
      <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/notfound">404</v-btn>
    </v-app-bar>
    <!-- <header>
      <nav :class="[$style.nav]">
        <router-link :class="[$style.nav__link]" to="/dashboard">Dashboard</router-link>
        <router-link :class="[$style.nav__link]" to="/dashboard/add/payment/Food?value=200">add Food</router-link>
        <router-link :class="[$style.nav__link]" to="/dashboard/add/payment/Transport?value=50">add Transport</router-link>
        <router-link :class="[$style.nav__link]" to="/dashboard/add/payment/Entertainment?value=2000">add Entertainment</router-link>
        <router-link :class="[$style.nav__link]" to="/notfound">404</router-link>
      </nav>
    </header> -->
    <!-- <h1 :class="[$style.app__header]">My personal costs</h1> -->
    <v-main>
      <router-view />
    </v-main>
    <ContextMenu />
  </v-app>
  <!-- </div> -->
</template>

<script>
// import PaymentsList from './components/PaymentsList'
// import PaymentForm from './components/PaymentForm'
// import ButtonNewCost from './components/Button'

// import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    ContextMenu: () => import('./components/ContextMenu/ContextMenu'),
    Modal: () => import('./components/modalWindow/Modal')
    // PaymentsList,
    // PaymentForm,
    // ButtonNewCost
  },
  data () {
    return {
      // showFormCost: false
      modalShown: false,
      modalSettings: {}
    }
  },
  methods: {
    onShown ({ name, settings }) {
      console.log({ name }, 'name')
      this.modalShown = name
      this.modalSettings = settings
    },
    onClose () {
      this.modalShown = ''
    }
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
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
    // this.fetchData()
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
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
.nav {
  display: flex;
  &__link {
    color: #000;
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: #84c8ea;
    }
  }
}

:global(.modal-enter-active), :global(.modal-leave-active) {
  transition: opacity 1s;
}
:global(.modal-enter), :global(.modal-leave-to) {
  opacity: 0;
}
</style>
