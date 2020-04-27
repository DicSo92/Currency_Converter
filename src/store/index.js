import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prevSearch: []
  },
  mutations: {
    addPrevSearch(state, val) {
      state.prevSearch.push(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
