<template>
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-centered">Questões</p>
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
              <div class="field is-grouped" v-for="questao in questoes">
                <p class="control">
                  <a class="button is-dark is-small">
                    <span class="icon is-small">
                      <i class="fas fa-question-circle"></i>
                    </span>
                  </a>
                </p>
                <p class="control is-expanded">{{ questao.headQuestion }}</p>
                <p class="control is-expanded">{{ questao.type }}</p>
                <p class="control">
                  <a class="button is-link is-small" style="border-radius: 50%;" v-on:click='oi(questao.idQuestion)'>
                    <span class="icon is-small">
                      <i class="fas fa-eye"></i>
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-info is-small" style=" border-radius: 50%;" @click="editQuestion(questao.idQuestion)">
                    <span class="icon is-small">
                      <i class="fas fa-pen"></i>
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-danger is-small" style=" border-radius: 50%;" @click='deleteQuestion(questao.idQuestion)'>
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
    <questao-card v-bind:class="(showModal) ? 'is-active' : ''" @hide="hideClicked"></questao-card>
  </div>
    <!-- questions end -->
  </div>
  <!-- CARD LIST end -->

</template>

<script>
import QuestaoCard from "./QuestaoCard"

export default {
  name: "questao-view-card",
  components: {
    QuestaoCard
  },
  data() {
    return {
      questoes: null,
      questaoEdit: null,
      showModal: false
    };
  },
  mounted() {
    this.getQuestions()
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
    getQuestions () {
      this.$axios
        .get('http://127.0.0.1:8000/api/questions/')
        .then(response => {
          console.log(response)
          this.questoes = response.data.results
        })
        .catch(error => {
         console.log(error)
        })
    },
    deleteQuestion (id) {
      this.$axios
        .delete('http://127.0.0.1:8000/api/questions/' + id)
        .then(response => {
          this.questoes.splice(id,1)
        })
        .catch(error => {
         console.log(error)
        })
    },
    editQuestion (id) {
      this.$axios
        .get('http://127.0.0.1:8000/api/questions/' + id)
        .then(response => {
          this.editQuestion = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>

<style>
/* .card {
  border-radius: 10px;
} */
.card-header-title {
  color: #636368;
}
</style>
