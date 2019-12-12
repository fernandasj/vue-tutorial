<template>
  <div class="field ">
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 1</label>
        <input class="input is-primary" placeholder="Alternativa 1" v-model="choice">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 2</label>
        <input class="input is-primary" placeholder="Alternativa 2" v-model="choice">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 3</label>
        <input class="input is-primary" placeholder="Alternativa 3" v-model="choice">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 4</label>
        <input class="input is-primary" placeholder="Alternativa 4" v-model="choice">
      </p>
      <p class="control field is-expanded has-text-left">
        <label class="label">Alternativa 5</label>
        <input class="input is-primary" placeholder="Alternativa 5" v-model="choice">
      </p>

      <div class="control has-text-left">
        <label class="label">Resposta esperada</label>
        <div class="select field is-primary">
          <select v-model="correct">
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

}
</script>
<style>

</style>
