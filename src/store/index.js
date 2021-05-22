import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    pagination: [1, 2, 3],
    categoryList: ['Food', 'Transport', 'Education', 'Entertainment'],
    itemsOnPage: 3,
    pageNumber: 1
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload.items
    },
    setCategories (state, payload) {
      console.log(state.categoryList, 'ct')
      console.log(payload, 'payload')
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
      console.log(state.categoryList, 'result')
    },
    addData (state, payload) {
      if (Number.isInteger(state.paymentsList.length / state.itemsOnPage)) {
        state.pagination.push(state.pagination.length + 1)
      }
      payload.id = state.paymentsList.length + 1
      state.paymentsList.push(payload)
    },
    selectedPage (state, page) {
      state.pageNumber = page
    },
    previousPage (state) {
      if (state.pageNumber > 1) {
        state.pageNumber = state.pageNumber - 1
      }
    },
    nextPage (state) {
      const paginationsLength = state.pagination.length
      if (paginationsLength !== state.pageNumber) {
        state.pageNumber = state.pageNumber + 1
      }
    }
  },
  getters: {
    getPaymentsList: (state) => {
      const firstPage = (state.pageNumber - 1) * state.itemsOnPage
      const lastPage = firstPage + state.itemsOnPage
      return state.paymentsList.slice(firstPage, lastPage)
    },
    getCategoryList: state => state.categoryList,
    getPaginationList: (state) => {
      return state.pagination
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            {
              items: [
                { id: 1, date: '20.03.2020', category: 'Food', price: 169 },
                { id: 2, date: '21.03.2020', category: 'Navigation', price: 50 },
                { id: 3, date: '22.03.2020', category: 'Sport', price: 450 },
                { id: 4, date: '23.03.2020', category: 'Entertaiment', price: 969 },
                { id: 5, date: '24.03.2020', category: 'Education', price: 1500 },
                { id: 6, date: '25.03.2020', category: 'Food', price: 200 },
                { id: 7, date: '26.03.2020', category: 'Navigation', price: 250 },
                { id: 8, date: '27.03.2020', category: 'Sport', price: 500 }
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
