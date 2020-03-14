import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loginData: "",
    choiceData: []
  },

  mutations: {
    loginDataMutation(state, payload) {
      state.loginData = payload;
    },
    choiceDataMutation(state, payload) {
      state.choiceData = payload;
    }
  },

  actions: {
    loginDataAction({ commit }, payload) {
      commit("loginDataMutation", payload);
    },
    choiceDataAction({ commit }, payload) {
      commit("choiceDataMutation", payload);
    }
  },

  getters: {
    getLoginData(state) {
      return state.loginData;
    },
    getChoiceData(state) {
      return state.choiceData;
    }
  }
});
