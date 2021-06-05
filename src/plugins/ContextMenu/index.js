export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$contextMenu = {
      EventBus: new Vue(),

      showContextMenu (name, settings) {
        this.EventBus.$emit('showContextMenu', { name, settings })
      },

      close () {
        this.EventBus.$emit('close')
      },

      closeForm () {
        this.EventBus.$emit('closeForm')
      }
    }
  }
}
