<template>
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-centered">Testes</p>
      <p class="control">
        <a
          class="button is-small is-black add-button"
          @click="show"
          style="margin:15px; border-radius: 50%;"
        >
          <span class="icon is-small">
            <i class="fa fa-plus"></i>
          </span>
        </a>
      </p>
    </header>

    <!-- Questions -->
    <div class="card-content">
      <div class="content">
        <div class="row">
          <div class="columns">
            <div class="column">
              <div class="field is-grouped" v-for="teste in testes">
                <p class="control">
                  <a class="button is-dark is-small">
                    <span class="icon is-small">
                      <i class="fas fa-question-circle"></i>
                    </span>
                  </a>
                </p>
                <p class="control is-expanded">{{ teste.name }}</p>
                <p class="control is-expanded">{{ teste.discipline }}</p>
                <p class="control is-expanded">{{ teste.aplicationDate }}</p>
                <p class="control">
                  <a class="button is-link is-small" style="border-radius: 50%;" v-on:click='oi(teste.idTest)'>
                    <span class="icon is-small">
                      <i class="fas fa-eye"></i>
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-info is-small" style=" border-radius: 50%;" @click="editTeste(teste.idTest)">
                    <span class="icon is-small">
                      <i class="fas fa-pen"></i>
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-danger is-small" style=" border-radius: 50%;" @click='deleteTeste(teste.idTest)'>
                    <span class="icon is-small">
                      <i class="fa fa-trash"></i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <teste-card v-bind:class="(showModal) ? 'is-active' : ''" @hide="hideClicked"></teste-card>
  </div>
    <!-- questions end -->
  </div>
  <!-- CARD LIST end -->

</template>

<script>
import TesteCard from "./TesteCard"

export default {
  name: "teste-professor-card-view",
  components: {
    TesteCard
  },
  data() {
    return {
      testes: null,
      testeEdit: null,
      showModal: false
    };
  },
  mounted() {
    this.getTestes()
  },
  methods: {
      oi (id) {
      alert(id)
    },
    show() {
      this.showModal = true
    },
    hideClicked() {
      this.showModal = false
    },
    getTestes () {
      this.$axios
        .get('http://127.0.0.1:8000/api/tests/')
        .then(response => {
          console.log(response)
          this.testes = response.data.results
        })
        .catch(error => {
         console.log(error)
        })
    },
    deleteTeste (id) {
      this.$axios
        .delete('http://127.0.0.1:8000/api/tests/' + id)
        .then(response => {
          this.testes.splice(id,1)
        })
        .catch(error => {
         console.log(error)
        })
    },
    editTeste (id) {
      this.$axios
        .get('http://127.0.0.1:8000/api/tests/' + id)
        .then(response => {
          this.editTeste = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>

<style>
.card-header-title {
  color: #636368;
}
</style>
