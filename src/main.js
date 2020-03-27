import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueRouter from "vue-router";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import "babel-polyfill";

import { store } from "./store";
import { router } from "./routes";

import Vuex from "vuex";

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

Vue.use(VueFormWizard);
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  el: "#app",
  render: h => h(App),
  router
}).$mount("#app");
