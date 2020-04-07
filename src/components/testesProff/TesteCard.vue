<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Adicionar Teste</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
          <div class="columns">
            <div class="column is-two-fifths">
              <div class="field is-primary">
                <label class="label has-text-left">Data Inicial</label>
              </div>
              <input v-model="aplicationDate" class="input field is-primary" type="datetime-local" placeholder="data" />
            </div>
            <div class="column is-two-fifths">
              <div class="field is-primary">
                <label class="label has-text-left">Data Limite</label>
              </div>
              <input v-model="aplicationDateLimit" class="input field is-primary" type="datetime-local" placeholder="data" />
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-fifth">
              <div class="field is-primary">
                <label class="label has-text-left">Disciplina</label>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="select is-primary">
                <select v-model="discipline">
                  <option v-for="disc in disciplines" :value="disc.idDiscipline">{{ disc.name }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label has-text-left">Cabeçalho do Teste</label>
                <textarea
                  class="textarea is-primary"
                  rows="3"
                  placeholder="Cabeçalho da questão"
                  v-model="name"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label has-text-left" style="margin-top:5px">Adicionar Questões</label>
              </div>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <input id="autocomplete" class="input is-primary" v-model="idQuestion" list="questoes" placeholder="Procure uma questão" />
            </div>
            <div class="field">
            <datalist id="questoes">
              <option v-for="(questao, index) in questoes" :value="index" :label="questao.headQuestion"></option>
            </datalist>
          </div>
            <div class="control">
              <button type="submit" class="button is-black" @click="addQuestions">
                <b>+</b>
              </button>
            </div>
          </div>
          <div calss="field">
            <div class="control">
              <article  v-for="q in addQuestoes" class="message is-small">
                <div class="message-header">
                  <p>Questão selecionada:</p>
                  <button class="delete is-small" aria-label="delete" @click="deleteQuestions(q.idQuestion)"></button>
                </div>
                <div class="message-body">
                  {{q.headQuestion}}
                </div>
              </article>
              <!-- <span v-for="q in addQuestoes" class="tag is-medium is-black" style="margin-right:5px">
                {{q.headQuestion}}
                <button class="delete is-small" @click="deleteQuestions(q.idQuestion)"></button>
              </span> -->
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button type="submit" class="button is-black" @click="formSubmitQuestion">Savar</button>
        <button class="button is-dark" @click="destroy">Cancelar</button>
      </footer>
    </div>
  </div>
</template>

<script>
import QuestaoViewCard from "../questoes/QuestaoViewCard";

export default {
  name: "teste-card",
  components: {
    QuestaoViewCard
  },
  data() {
    return {
      aplicationDate: "",
      aplicationDateLimit: "",
      name: "",
      discipline: "",
      headQuestion: "",
      idQuestion: "",
      getQuestao: "",
      disciplines: null,
      questoes: null,
      questaoEdit: null,
      addQuestoes: [],
    };
  },
  mounted() {
    this.getDisciplines();
    this.getQuestions();
  },
  methods: {
    destroy() {
      console.log('eita')
      this.$emit('hide')
    },
    getQuestions() {
      this.$axios
        .get("http://127.0.0.1:8000/api/questions/")
        .then(response => {
          console.log(response);
          this.questoes = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDisciplines() {
      this.$axios
        .get("http://127.0.0.1:8000/api/disciplines/")
        .then(response => {
          console.log(response);
          this.disciplines = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
    },
    formSubmitQuestion(e) {
      e.preventDefault();
      let currentObj = this;
      this.$axios
        .post("http://localhost:8000/api/tests/", {
            aplicationDate: this.aplicationDate,
            aplicationDateLimit: this.aplicationDateLimit,
            name: this.name,
            discipline: this.discipline,
            questions: this.addQuestoes.map(x => x.idQuestion),
        })
        .then(response => {
            console.log(response);
            this.aplicationDate = ""
            this.aplicationDateLimit = ""
            this.name = ""
            this.discipline = ""
            this.headQuestion = ""
            this.idQuestion = ""
            this.getQuestao = ""
            this.disciplines = null
            this.questoes = null
            this.questaoEdit = null
            this.addQuestoes = []

        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addQuestions() {
      console.log(this.questoes[parseInt(this.idQuestion)])
      this.addQuestoes.push(this.questoes[parseInt(this.idQuestion)])
      console.log(this.addQuestoes.map(x => x.idQuestion))
    },
    deleteQuestions (id) {
      this.addQuestoes.splice(id,1)
    },
  }
};
</script>

<style scoped>
.input {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
  outline: none;
  border-bottom-width: 2px;
  box-shadow: none;
}
.input.is-primary:focus {
  box-shadow: none;
}
.add-button {
  border-radius: 50%;
}
input[type="checkbox"] {
  position: relative;
  cursor: pointer;
  margin-top: 4px;
}
input[type="checkbox"]:before {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 0;
  left: 0;
  border: 2px solid #555555;
  border-radius: 3px;
  background-color: white;
}
input[type="checkbox"]:checked:after {
  content: "";
  display: block;
  width: 6px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
}
</style>
