import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPath: true,
    LoginInfo: '',
    Info: '',
  },
  mutations: {
    isPath() {
      this.state.isPath = !this.state.isPath
      this.state.Info = 123
    },
    setLoginInfo(data) {
      this.state.LoginInfo = data
    },

  },
  actions: {
  },
  modules: {
  }
})
