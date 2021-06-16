import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: ['Food', 'Transport', 'Education', 'Entertainment']
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload.items
    },
    setCategories (state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },
    addData (state, payload) {
      payload.id = state.paymentsList.length + 1
      state.paymentsList.push(payload)
    },
    deleteData (state, payload) {
      // не уверен что forEach лучшее решение, подскажите как можно лучше сделать
      // state.paymentsList.forEach(function (el, i) {
      //   if (el.id === payload) {
      //     state.paymentsList.splice(i, 1)
      //   }
      // })
      state.paymentsList = state.paymentsList.filter(item => item.id !== payload)
    },
    updateData (state, payload) {
      const item = state.paymentsList.find(item => item.id === payload.id)
      if (item) {
        Object.assign(item, payload)
      }
      // опять же не уверен что map лучшее решение, подскажите как можно лучше сделать
      // state.paymentsList.map(function (item) {
      //   if (item.id === payload.id) {
      //     item.date = payload.date
      //     item.category = payload.category
      //     item.price = payload.price
      //   }
      // })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            {
              items: [
                { id: 1, date: '2021-06-02', category: 'Food', price: 169 },
                { id: 2, date: '2021-06-03', category: 'Navigation', price: 50 },
                { id: 3, date: '2021-06-04', category: 'Sport', price: 450 },
                { id: 4, date: '2021-06-05', category: 'Entertaiment', price: 969 },
                { id: 5, date: '2021-06-06', category: 'Education', price: 1500 },
                { id: 6, date: '2021-06-07', category: 'Food', price: 200 },
                { id: 7, date: '2021-06-08', category: 'Navigation', price: 250 },
                { id: 8, date: '2021-06-09', category: 'Sport', price: 500 }
              ]
            }
            // у меня не получилось сделать с этим объектом, сделал немного по своему
            // {
            //   page1: [
            //     { id: 1, date: '20.03.2020', category: 'Food', price: 169 },
            //     { id: 2, date: '21.03.2020', category: 'Navigation', price: 50 },
            //     { id: 3, date: '22.03.2020', category: 'Sport', price: 450 }
            //   ],
            //   page2: [
            //     { id: 4, date: '23.03.2020', category: 'Entertaiment', price: 969 },
            //     { id: 5, date: '24.03.2020', category: 'Education', price: 1500 },
            //     { id: 6, date: '25.03.2020', category: 'Food', price: 200 }
            //   ],
            //   page3: [
            //     { id: 7, date: '26.03.2020', category: 'Navigation', price: 250 },
            //     { id: 8, date: '27.03.2020', category: 'Sport', price: 500 }
            //   ]
            // }
          )
        })
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
    // loadCategories ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(['Food', 'Transport', 'Education', 'Entertainment'])
    //     }, 1000)
    //   })
    //     .then(res => {
    //       commit('setCategories', res)
    //     })
    // }
  }
})
