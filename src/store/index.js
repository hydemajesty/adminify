import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../menu'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: menu,
    user: {},
    token: null
  },
  mutations: {},
  actions: {}
})

export default store
