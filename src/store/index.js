import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityName: state.cityName,
        cityId: state.cityId
      }
    }
  })],
  state: {
    cityName: '上海',
    cityId: '310100',
    cinemaList: [],
    isTabbarShow: true
  },
  getters: {
  },
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    changeCinemasData (state, data) {
      state.cinemaList = data
    },
    clearCinemaList (state) {
      state.cinemaList = []
    },
    show (state) { state.isTabbarShow = true },
    hide (state) { state.isTabbarShow = false }
  },
  actions: {
    getCinemasData (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=5121167`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        // console.log(res.data.data.cinemas)
        store.commit('changeCinemasData', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
