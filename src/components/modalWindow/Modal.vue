<template>
  <div :class="[$style.modal]">
    <div :class="[$style.modal__content]">
      <EditItem
        v-if="name === 'EditForm'"
        :class="[$style.modal__form]"
        :idItem="settings && settings.id"
        btn="save"
      />
    </div>
  </div>
</template>

<script>
import EditItem from '../EditItem'

export default {
  components: {
    EditItem
  },
  props: {
    name: String,
    settings: Object
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  }
}
</script>

<style lang="scss" module>
.modal{
}
</style>
