<template>
  <div class="field ">
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 1</label>
        <input class="input is-primary" placeholder="Alternativa 1">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 2</label>
        <input class="input is-primary" placeholder="Alternativa 2">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 3</label>
        <input class="input is-primary" placeholder="Alternativa 3">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 4</label>
        <input class="input is-primary" placeholder="Alternativa 4">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 5</label>
        <input class="input is-primary" placeholder="Alternativa 5">
      </p>

      <div class="control has-text-left">
        <label class="label">Resposta esperada</label>
        <div class="select field is-primary">
          <select>
            <option>Alternativa 1</option>
            <option>Alternativa 2</option>
            <option>Alternativa 2</option>
            <option>Alternativa 4</option>
            <option>Alternativa 5</option>
          </select>
        </div>
      </div>

    </div>
</template>
<script>
export default {
  name: "questao-objetiva",

  data: {

  },
  methods: {
    submitChoices(id) {
      let currentObj = this;
      this.$axios.post('http://localhost:8000/api/choices/', {
          headQuestion: this.headQuestion,
          typeQuestion: this.type,
          discipline: this.discipline
      })
      .then(function (response) {
          currentObj.output = response.data
          idQuestion = currentObj.output.idQuestion
      })
      .catch(function (error) {
          console.log(error)
      });
    }
  }
}
</script>
<style>

</style>
