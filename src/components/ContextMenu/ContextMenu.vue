<template>
  <div :class="[$style.context]" v-if="shown" :style="styles">
    <div
      :class="[$style.context__item]"
      class="py-1"
      v-for="item in items"
      :key="item.text"
      @click="onClick(item)"
    >
      <v-icon
        class="mr-3 py-2"
        small
      >
      {{ item.icon }}
      </v-icon>
      {{ item.text }}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0,
      showForm: false,
      item: null
    }
  },
  components: {
  },
  props: {
    objItem: Object
  },
  methods: {
    onClick (item) {
      item.action()
      this.onClose()
    },
    onShow ({ items, caller }) {
      this.shown = true
      this.items = items
      this.setPosition(caller)
    },
    onClose () {
      this.shown = false
      this.items = []
      // this.showForm = false
    },
    setPosition (caller) {
      const computed = caller.getBoundingClientRect()
      this.xPos = computed.left
      this.yPos = computed.top
    },
    onShowForm () {
      this.showForm = true
    }
  },
  computed: {
    styles () {
      return {
        top: `${this.yPos + 30}px`,
        left: `${this.xPos - 40}px`
      }
    }
  },
  mounted () {
    this.$contextMenu.EventBus.$on('show', this.onShow)
    this.$contextMenu.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$contextMenu.EventBus.$off('show', this.onShow)
    this.$contextMenu.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="scss" module>
.context {
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px;
  position: absolute;
  padding: 5px 0;
  &__item {
    padding: 0px 10px;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
