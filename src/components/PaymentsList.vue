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
        <td :class="[$style.paymentslist__column]">{{ item.price }}</td>
      </tr>
    </table>
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

import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      page: 1,
      amountItems: 3
    }
  },
  methods: {
    showActivePage (page) {
      this.page = page
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
      this.page = 3 // 3 страницу сделал, чтобы было сразу видно добаление
    }
    // this.page = +(this.$route.params.page)
    console.log(this.page, 'page')
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
    width: 25%;
    border-bottom: 1px solid #ccc;
    padding: 20px 30px;
  }
}
.bold {
  font-weight: bold;
}
</style>
