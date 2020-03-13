<template>
    <div id="app">
        <section class="hero is-primary is-bold is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <router-link to="/" class="navbar-item">ProjectX</router-link>
                            <router-link to="/questions" class="navbar-item">Questões</router-link>
                            <router-link to="/testesP" class="navbar-item">Testes</router-link>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="row">
                        <div class="columns">
                            <div class="column is-half is-offset-one-quarter">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <div class="container">
                    <div class="content has-text-centered">
                        <p>
                            <strong>ProjectX</strong> by
                            <a href="http://github.com/fernandasj">Fernanda Vieira</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store();

export default {
    name: "app",
    data() {
        return {
            login: null
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.login);
        }
    },
    computed: {
        getLogin() {
            return this.$store.getters.login;
        }
    }
};
</script>

<style>
</style>
