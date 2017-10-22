import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    mail: {
      from_name: '',
      message: '',
      from_email: ''
    },
    settings: [],
    links: [],
    widgets: [],
    category: []
  },
  mutations: {
    set (state, {type, data}) {
      state[type] = data
    }
  }
})

export default store
