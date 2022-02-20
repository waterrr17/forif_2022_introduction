import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      name: ""
    }
  },
  mutations: {
    changeName(state, value){
      state.name = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
