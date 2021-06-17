import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: ['Food', 'Navigation', 'Transport', 'Education', 'Entertainment']
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
      state.paymentsList = state.paymentsList.filter(item => item.id !== payload)
    },
    updateData (state, payload) {
      const item = state.paymentsList.find(item => item.id === payload.id)
      if (item) {
        Object.assign(item, payload)
      }
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
                { id: 8, date: '2021-06-09', category: 'Sport', price: 500 },
                { id: 9, date: '2021-06-10', category: 'Food', price: 1500 },
                { id: 10, date: '2021-06-11', category: 'Sport', price: 200 },
                { id: 11, date: '2021-06-12', category: 'Education', price: 1100 },
                { id: 12, date: '2021-06-13', category: 'Food', price: 50 },
                { id: 13, date: '2021-06-14', category: 'Sport', price: 1200 },
                { id: 14, date: '2021-06-15', category: 'Education', price: 3200 },
                { id: 15, date: '2021-06-16', category: 'Sport', price: 2200 }
              ]
            }
          )
        })
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
