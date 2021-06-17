<template>
  <div :class="[$style.paymentslist]">
    <v-data-table
      :hide-default-footer="true"
      :headers="tableHeaders"
      :items="currentList"
    >
    <template v-slot:item.actions="{ item }">
      <v-icon
        medium
        @click="onContextMenuClick($event, item.id)"
      >
        mdi-dots-vertical
      </v-icon>
    </template>
    </v-data-table>
    <transition name="fade">
      <ContextMenu
        :class="[$style.contextMenu]"
        v-if="showModal"
        :objItem="itemList"
      />
    </transition>
    <Pagination
      :length="getPaymentsList.length"
      :amountItems="amountItems"
      @activePage="showActivePage"
      :currentPage="page"
    />
  </div>
</template>

<script>
import Pagination from './Pagination'

import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Pagination,
    ContextMenu: () => import('./ContextMenu/ContextMenu')
  },
  data () {
    return {
      page: 1,
      amountItems: 5,
      showModal: false,
      itemList: null,
      tableHeaders: [
        { text: '#', value: 'id' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Price', value: 'price' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'deleteData'
    ]),
    showActivePage (page) {
      this.page = page
    },
    onContextMenuClick (event, id) {
      const items = [
        { text: 'Delete', icon: 'mdi-delete', action: () => { this.deleteData(id) } },
        { text: 'Edit', icon: 'mdi-pencil', action: () => { this.$modal.show('EditForm', { id }) } }
      ]
      this.$contextMenu.show({ event, items })
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentList () {
      const { amountItems, page } = this
      return this.getPaymentsList.slice(amountItems * (page - 1), amountItems * (page - 1) + amountItems)
    }
  },
  watch: {
    '$route.path': function () {
      this.page = this.$route.params.page
    }
  },
  mounted () {
    if (+(this.$route.params.page)) {
      this.page = +this.$route.params.page
    } else {
      this.page = 1
    }
  }
}
</script>

<style lang="scss" module>
:global(.fade-enter-active), :global(.fade-leave-active) {
  transition: opacity 1s;
}
:global(.fade-enter), :global(.fade-leave-to) {
  opacity: 0;
}
</style>
