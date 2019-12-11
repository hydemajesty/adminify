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
  actions: {},
  modules: {
    performance: {
      namespaced: true,
      state: {
        // 目标基金
        fund: null,
        // 比较基准
        benchmark: null,
        // 绩效计算区间
        range: null,
        // 绩效计算指标
        measures: []
      },
      mutations: {
        setFund: (state, fund) => { state.fund = fund },
        setFundNav: (state, nav) => { Vue.set(state.fund, 'nav', nav) },
        setBenchmark: (state, benchmark) => { state.benchmark = benchmark },
        setRange: (state, range) => { state.range = range },
        setMeasures: (state, measures) => { state.measures = measures }
      },
      getters: {
        hasFund: ({fund}) => !!fund,
        hasFundNav: ({fund}) => fund.nav && fund.nav.length > 0,
        hasBenchmark: ({benchmark}) => !!benchmark,
        hasValidRange: ({range}) => range && range.start && range.end,
        hasMeasures: ({measures}) => measures && measures.length > 0,
        readyForReport: (state, getters) =>
            getters.hasFund && getters.hasFundNav &&
            getters.hasBenchmark && getters.hasValidRange && getters.hasMeasures
      }
    }
  }
})

export default store
