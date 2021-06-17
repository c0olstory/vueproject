<template>
  <v-app>
    <v-container>
      <transition name="modal">
        <Modal v-if="modalShown" :name="modalShown" :settings="modalSettings" />
      </transition>
      <v-app-bar app flat>
        <v-row align="center" align-content="center" justify="center">
            <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard">Dashboard</v-btn>
            <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard/add/payment/Food?value=200">add Food</v-btn>
            <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard/add/payment/Transport?value=50">add Transport</v-btn>
            <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/dashboard/add/payment/Entertainment?value=2000">add Entertainment</v-btn>
            <v-btn :ripple="false" plain :class="[$style.nav__link]" to="/notfound">404</v-btn>
        </v-row>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <ContextMenu />
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    ContextMenu: () => import('./components/ContextMenu/ContextMenu'),
    Modal: () => import('./components/modalWindow/Modal')
  },
  data () {
    return {
      modalShown: false,
      modalSettings: {}
    }
  },
  methods: {
    onShown ({ name, settings }) {
      this.modalShown = name
      this.modalSettings = settings
    },
    onClose () {
      this.modalShown = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
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
