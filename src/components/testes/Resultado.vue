<template>
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-centered">Resultado da Avaliação</p>
    </header>

    <!-- CARD INPUTS -->
    <div class="card-content">
      <section class="card-body">
        <div class="content">
          <div class="field has-text-left">
            <h3 class="has-text-centered">
              {{result.name}}
            </h3>
            <p>
              <b>Aluno(a):</b> {{result.student}}
            </p>
            <p>
              <b>Professor(a):</b> Gustavo Soares Vieira
            </p>
            <p>
              <b>Disciplina:</b> {{result.discipline}}
            </p>
          </div>
          <div class="tile is-vertical is-4" style="margin-left: 33%">
            <article class="tile is-child notification is-dark">
              <p class="subtitle is-3">Nota</p>
              <p class="title is-1">{{result.scores.toFixed(0)}}</p>
            </article>
          </div>
          <table class="table is-bordered" style="margin-top: 4%">
            <thead>
              <tr>
                <th class="is-dark">
                  <abbr>Questão</abbr>
                </th>
                <th class="is-dark">
                  <abbr>Tipo</abbr>
                </th>
                <th class="is-dark">
                  <abbr>Status</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="question in result.questions">
                <td>{{question.headQuestion}}</td>
                <td>{{question.typeQuestion}}</td>
                <td>
                  <div v-if="(question.correctAnswer == false) && (question.typeQuestion == 'Subjetiva')">
                    <span class="tag is-dark">
                      <b>Em progresso</b>
                    </span>
                  </div>
                  <div v-if="question.correctAnswer">
                    <span class="tag is-dark">
                      <b>Correta</b>
                    </span>
                  </div>
                  <div v-if="(question.correctAnswer == false) && (question.typeQuestion != 'Subjetiva')">
                    <span class="tag is-dark">
                      <b>Incorreta</b>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer class="card-footer">
        <div class="field is-grouped" style="margin-left:42%; margin-top:2%">
          <p class="control">
            <button v-on:click="back()" class="button is-dark">Voltar</button>
          </p>
        </div>
      </footer>
    </div>
  </div>
  <!-- CARD INPUTS end -->
</template>
<script>
const API_BASE_URL = "http://127.0.0.1:8000/api";

export default {
    name: "resultado",
    data() {
        return {
          result: [],
        };
    },
    mounted() {
        this.getResult();
    },
    methods: {
        back() {
            this.$router.push({ path: "/tests" });
        },
        getResult() {
            // let student = "02c68c7b-cbd0-4a92-8ce8-6af130b4ae9f"
            console.log(this.$route.params.id);
            this.$axios
                .get(`${API_BASE_URL}/testStudents/${this.$route.params.id}/result`)
                .then(response => {
                    console.log(response);
                    this.result = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
<style>
</style>
