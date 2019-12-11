<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Adicionar Questão</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field is-grouped">
          <p class="control field is-expanded has-text-left">
            <label class="label">Cabeçalho da Questão</label>
            <textarea
              class="textarea is-primary"
              rows="3"
              placeholder="Cabeçalho da questão"
              v-model="questao"
            ></textarea>
          </p>
          <div class="has-text-right">
            <label class="label">Tipo da Questão</label>
            <div class="select field is-primary">
              <select @change="typeUpdated">
                <option value="-1">Tipo</option>
                <option value="0">Objetiva</option>
                <option value="1">Subjetiva</option>
                <option value="2">Algoritimo</option>
              </select>
            </div>
          </div>
        </div>
        <!--corpo da qestao-->
        <questao-objetiva v-show="type === '0'"></questao-objetiva>
        <questao-subjetiva v-show="type === '1'"></questao-subjetiva>
        <questao-algoritmo v-show="type === '2'"></questao-algoritmo>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Savar</button>
        <button class="button">Cancelar</button>
      </footer>
    </div>
  </div>
</template>

<script>
import QuestaoObjetiva from "./QuestaoObjetiva"
import QuestaoSubjetiva from "./QuestaoSubjetiva"
import QuestaoAlgoritmo from "./QuestaoAlgoritmo"

export default {
  name: "questao-card",
  components: {
    QuestaoObjetiva,
    QuestaoSubjetiva,
    QuestaoAlgoritmo
  },
  data() {
    return {
      type: "-1"
    };
  },
  methods: {
    typeUpdated (event) {
      this.type = event.target.value
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
