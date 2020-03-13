<template>
    <div class="card">
        <header class="card-header">
            <p class="control is-expanded card-header-title has-text-centered">Login</p>
        </header>

        <!-- CARD INPUTS -->
        <div class="card-content">
            <div class="content">
                <form class="login-right" @submit.prevent>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input
                                class="input"
                                type="email"
                                placeholder="Email"
                                v-model="userLogin.email"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input
                                class="input"
                                type="password"
                                placeholder="Password"
                                v-model="userLogin.password"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="radio">
                                <input
                                    v-model="userLogin.userType"
                                    :value="1"
                                    type="radio"
                                    name="userType"
                                />
                                Professor(a)
                            </label>
                            <label class="radio">
                                <input
                                    v-model="userLogin.userType"
                                    :value="2"
                                    type="radio"
                                    name="userType"
                                />
                                Aluno(a)
                            </label>
                        </div>
                    </div>
                    <button class="button is-black" @click="loginData">Login</button>
                    <a>
                        <p style="margin-top:5px">Cadastre-se aqui!</p>
                    </a>
                </form>
            </div>
        </div>
        <!-- CARD INPUTS end -->
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            userLogin: {
                email: "",
                password: "",
                userType: ""
            }
        };
    },
    methods: {
        loginData() {
            console.log(this.userLogin);
            this.$store.dispatch("loginDataAction", this.userLogin);
            this.$router.push({ path: "/login-data" });

            // if (this.userLogin.userType == 1) {
            //     this.$router.push({ path: "/testesP" });
            // } else if (this.userLogin.userType == 2) {
            //     console.log("é um aluno(a)");
            //     this.$router.push({ path: "/testes" });
            // }
        }
    }
};
</script>
