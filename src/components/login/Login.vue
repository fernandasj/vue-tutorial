<template>
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-centered">Login</p>
    </header>

    <!-- CARD INPUTS -->
    <div class="card-content">
      <div class="content">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <div class="control">
            <label class="radio">
              <input v-model="login" :value="1" type="radio" name="user" />
              Professor(a)
            </label>
            <label class="radio">
              <input v-model="login" :value="2" type="radio" name="user" />
              Aluno(a)
            </label>
          </div>
        </div>
        <button class="button is-black">Login</button>
        <a>
          <p style="margin-top:5px">Cadastre-se aqui!</p>
        </a>
      </div>
    </div>
    <!-- CARD INPUTS end -->
  </div>
</template>
<script>
export default {
  name: "login",
  data (){
    return {
      login: null
    };
  }
};
</script>
