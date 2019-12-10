import Vue from 'vue'
import store from './store/'
global.store = store

import router from './router'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import './http'

import 'vuetify/src/stylus/main.styl'
import 'vuetify/src/stylus/settings/_colors.styl'
import '@/styles/main.styl'

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted () {
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  created () {
    // this.$http.get('/users/1').then(({data}) => console.log(data))
    // global.$t = this.$t
    // // fetch menu from server
    // this.$http.get('/menu').then(({data}) => {
    //   this.$store.commit('setMenu', data)
    // })
    // this.$store.dispatch('checkPageTitle', this.$route.path)
    // this.$store.dispatch('checkAuth')
  }
})
