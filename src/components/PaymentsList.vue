<template>
  <div :class="[$style.paymentslist]">
    <table :class="[$style.paymentslist__table]">
      <tr :class="[$style.paymentslist__line]">
        <td :class="[$style.paymentslist__column, $style.bold]">#</td>
        <td :class="[$style.paymentslist__column, $style.bold]">Date</td>
        <td :class="[$style.paymentslist__column, $style.bold]">Category</td>
        <td :class="[$style.paymentslist__column, $style.bold]">Price</td>
      </tr>
      <tr :class="[$style.paymentslist__line]" v-for="(item, id) in items" :key="id">
        <td :class="[$style.paymentslist__column]">{{ item.id }}</td>
        <td :class="[$style.paymentslist__column]">{{ item.date }}</td>
        <td :class="[$style.paymentslist__column]">{{ item.category }}</td>
        <td :class="[$style.paymentslist__column]">{{ item.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
.paymentslist {
  font-size: 18px;
  max-width: 600px;
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
