import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    profileInfo: [],
    beerInfo: [],
  },
  mutations: {
    SET_PROFILE_INFO_TO_STATE: (state, profileInfo) => {
      state.profileInfo = profileInfo
    },
    SET_BEER_INFO_TO_STATE: (state, beerInfo) => {
      state.beerInfo = beerInfo
    },
  },
  actions: {
    GET_PROFILE_INFO({ commit }) {
      return axios('https://random-data-api.com/api/users/random_user', {
        method: 'GET',
      })
        .then((profileInfo) => {
          commit('SET_PROFILE_INFO_TO_STATE', profileInfo.data)
          return profileInfo
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    GET_BEER_INFO({ commit }) {
      return axios('https://random-data-api.com/api/beer/random_beer', {
        method: 'GET',
      })
        .then((beerInfo) => {
          commit('SET_BEER_INFO_TO_STATE', beerInfo.data)
          return beerInfo
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
  },
  getters: {
    PROFILE_INFO(state) {
      return state.profileInfo
    },
    BEER_INFO(state) {
      return state.beerInfo
    },
  },
})

export default store
