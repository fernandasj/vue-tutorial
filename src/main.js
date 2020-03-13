import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueRouter from "vue-router";
import Login from "./components/login/Login";
import QuestaoViewCard from "./components/questoes/QuestaoViewCard";
import TesteEstudanteCardView from "./components/testes/TesteEstudanteCardView";
import TesteProfessorCardView from "./components/testesProff/TesteProfessorCardView";
import RespostaAlgoritmo from "./components/respostas/RespostaAlgoritmo";
import RespostaSubjetiva from "./components/respostas/RespostaSubjetiva";
import RespostaObjetiva from "./components/respostas/RespostaObjetiva";
import Resultado from "./components/testes/Resultado";
import LoginData from "./components/LoginData";
import { store } from "./store";

import Vuex from "vuex";

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

Vue.use(VueRouter);
Vue.use(Vuex);

var router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Login },
    { path: "/questions", component: QuestaoViewCard },
    { path: "/tests", component: TesteEstudanteCardView },
    { path: "/testesP", component: TesteProfessorCardView },
    { path: "/resposta-algoritmo", component: RespostaAlgoritmo },
    { path: "/resposta-subjetiva", component: RespostaSubjetiva },
    { path: "/resposta-objetiva", component: RespostaObjetiva },
    { path: "/resultado", component: Resultado },
    { path: "/login-data", component: LoginData }
  ]
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
}).$mount("#app");
