import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loginData: ""
  },

  mutations: {
    loginDataMutation(state, payload) {
      state.loginData = payload;
    }
  },

  actions: {
    loginDataAction({ commit }, payload) {
      commit("loginDataMutation", payload);
    }
  },

  getters: {
    getLoginData(state) {
      return state.loginData;
    }
  }
});
