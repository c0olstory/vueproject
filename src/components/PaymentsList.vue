<template>
  <div :class="[$style.paymentslist]">
    <table :class="[$style.paymentslist__table]">
      <tr :class="[$style.paymentslist__line]">
        <td :class="[$style.paymentslist__column, $style.bold]">#</td>
        <td :class="[$style.paymentslist__column, $style.bold]">Date</td>
        <td :class="[$style.paymentslist__column, $style.bold]">Category</td>
        <td :class="[$style.paymentslist__column, $style.bold]">Price</td>
      </tr>
      <tr :class="[$style.paymentslist__line]" v-for="(item, id) in currentList" :key="id">
        <td :class="[$style.paymentslist__column]">{{ item.id }}</td>
        <td :class="[$style.paymentslist__column]">{{ item.date }}</td>
        <td :class="[$style.paymentslist__column]">{{ item.category }}</td>
        <td :class="[$style.paymentslist__column]">
          <div :class="[$style.paymentslist__column__block]">
            {{ item.price }}
            <span :class="[$style.icon]" @click="showPaymentList(item)">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" class="svg-inline--fa fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
            </span>
          </div>
        </td>
      </tr>
    </table>
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
// import ContextMenu from './modalwindow/ContextMenu'

import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination,
    ContextMenu: () => import('./modalwindow/ContextMenu')
  },
  data () {
    return {
      page: 1,
      amountItems: 3,
      showModal: false,
      itemList: null
    }
  },
  methods: {
    showActivePage (page) {
      this.page = page
    },
    showPaymentList (item) {
      console.log(item, 'item')
      this.itemList = item
      // this.$contextMenu.showContextMenu('paymentList', item)
      this.showModal = true
    }
    // onCloseModal () {
    //   this.showModal = false
    // }
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
    // this.$contextMenu.EventBus.$on('closeModal', this.onCloseModal)
    this.$contextMenu.EventBus.$on('showContextMenu', this.onShow)
    // this.page = +(this.$route.params.page)
    // this.$contextMenu.showContextMenu('paymentsList')
  }
}
</script>

<style lang="scss" module>
.paymentslist {
  font-size: 18px;
  max-width: 600px;
  margin-bottom: 20px;
  &__table {
    border-collapse: collapse;
  }
  &__column {
    width: 100px;
    border-bottom: 1px solid #ccc;
    padding: 20px 20px;
    &:first-child {
      width: 20px;
      padding-left: 5px;
    }
    &:last-child {
      width: 80px;
      padding-right: 5px;
      position: relative;
    }
    &__block {
      display: flex;
      justify-content: space-between;
    }
  }
}
.icon {
  height: 21px;
  cursor: pointer;
  & svg {
    width: 10px;
    height: 20px;
    &:hover path {
      transition: all .5s ease;
      fill:#84c8ea;
    }
  }
}
.bold {
  font-weight: bold;
}

:global(.fade-enter-active), :global(.fade-leave-active) {
  transition: opacity 1s;
}
:global(.fade-enter), :global(.fade-leave-to) {
  opacity: 0;
}
</style>
