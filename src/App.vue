<template>
    <div id="app">
        <section class="hero is-primary is-bold is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <div>
                                <router-link to="/" class="navbar-item">ProjectX</router-link>
                            </div>

                            <div>
                                <router-link
                                    v-if="getLogin.loggedIn && getLogin.userType == 1"
                                    to="/questions"
                                    class="navbar-item"
                                >Questões</router-link>
                            </div>

                            <div>
                                <router-link
                                    v-if="getLogin.loggedIn && getLogin.userType == 1"
                                    to="/testesP"
                                    class="navbar-item"
                                >Testes</router-link>
                            </div>

                            <div>
                                <router-link
                                    v-if="getLogin.loggedIn && getLogin.userType == 2"
                                    to="/tests"
                                    class="navbar-item"
                                >Testes</router-link>
                            </div>

                            <div>
                                <router-link
                                    v-if="getLogin.loggedIn"
                                    to="/"
                                    @click.native="logout"
                                    class="navbar-item"
                                >Logout</router-link>
                            </div>
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
export default {
    name: "app",
    methods: {
        logout() {
            const userLogin = {
                email: null,
                password: null,
                userType: null,
                loggedIn: false
            };
            this.$store.dispatch("loginDataAction", userLogin);
        }
    },
    computed: {
        getLogin() {
            return this.$store.getters.getLoginData;
        }
    }
};
</script>

<style>
</style>
