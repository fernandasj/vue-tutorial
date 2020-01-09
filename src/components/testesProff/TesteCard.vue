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
              <input class="input field is-primary" type="datetime-local" placeholder="data" />
            </div>
            <div class="column is-two-fifths">
              <div class="field is-primary">
                <label class="label has-text-left">Data Limite</label>
              </div>
              <input class="input field is-primary" type="datetime-local" placeholder="data" />
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
                  <option v-for="disc in disciplines" value="disc.idDiscipline">{{ disc.name }}</option>
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
                  v-model="headQuestion"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label has-text-right" style="margin-top:5px">Adicionar Questões</label>
              </div>
            </div>
            <p class="control">
              <a
                class="button is-small is-success add-button"
                id="showModal"
                style="margin:15px; border-radius: 50%;"
              >
                <span class="icon is-small">
                  <i class="fa fa-plus"></i>
                </span>
              </a>
            </p>

          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button type="submit" class="button is-success" @click="formSubmitQuestion">Savar</button>
        <button class="button">Cancelar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "teste-card",
  data() {
    return {
      type: "-1",
      headQuestion: "",
      discipline: "",
      disciplines: null,
      input: 10,
      output: 14
    };
  },
  mounted() {
    this.getDisciplines();
  },
  methods: {
    typeUpdated(event) {
      this.type = event.target.value;
    },
    inputTyped(e) {
      this.input = e;
      console.log("Card: " + this.input);
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
      let codes = this.$refs.qstAlg.getData();
      console.log(codes[0]["input"]);
      let currentObj = this;
      this.$axios
        .post("http://localhost:8000/api/questions/", {
          headQuestion: this.headQuestion,
          typeQuestion: this.type,
          discipline: this.discipline,
          input: codes[0]["input"],
          output: codes[0]["output"]
        })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
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
</style>
