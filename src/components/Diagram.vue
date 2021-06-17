
<script>
import { Pie } from 'vue-chartjs'

import { mapGetters } from 'vuex'

export default {
  extends: Pie,
  data () {
    return {
      category: [],
      arrQuantity: [],
      backgroundColorArr: [
        'rgba(255,99,132,0.4)',
        'rgba(75,192,192,0.4)',
        'rgba(255,206,86,0.4)',
        'rgba(54,162,135,0.4)',
        'rgba(105,30,135,0.4)'
      ]
    }
  },
  methods: {
    setup () {
      const allCategory = this.getPaymentsList.map(item => item.category) // Получаю все категории включая совпадения

      this.category = allCategory.reverse().filter(function (e, i, allCategory) { // Оставляю только уникальные категории
        return allCategory.indexOf(e, i + 1) === -1
      }).reverse()

      // const count = {}
      // allCategory.forEach((i) => { count[i] = (count[i] || 0) + 1 }) // Подсчитываю совпадения категорий

      // this.category.forEach(item => { // Прохожу по массиву уникальных категорий
      //   this.arrQuantity.push(count[item]) // Сопоставляю категории с объектом count
      // })

      this.renderChart({
        labels: this.category,
        datasets: [
          {
            label: 'Categories',
            backgroundColor: this.backgroundColorArr,
            // data: this.arrQuantity
            data: this.category.map(item => {
              return this.getPaymentsList.reduce((total, r) => {
                if (r.category === item) {
                  total += r.price
                }
                return total
              }, 0)
            })
          }
        ]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Costs by categories'
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ])
  },
  mounted () {
    setTimeout(() => { // без setTimeout не работает, не понял почему
      this.setup()
    }, 500)
  }
}
</script>

<style>

</style>
