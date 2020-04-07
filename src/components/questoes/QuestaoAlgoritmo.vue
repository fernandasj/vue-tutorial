<template>
  <div class="columns">
    <div class="column">
      <div class="field">
          <label class="label has-text-left">Entrada</label>
          <input class="input is-primary" placeholder="Ex: 1 2" v-model="dataInput">
      </div>
    </div>
    <div class="column">
      <div class="field">
          <label class="label has-text-left">Saída</label>
          <input class="input is-primary" placeholder="Ex: 1 2" v-model="dataOutput">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "questao-algoritmo",
  props: ["input", "output"],
  data: function() {
    return {
      dataInput: 0,
      dataOutput: 0
    }
  },
  mounted () {
    this.dataInput = this.input
    this.dataOutput = this.output
  },
  methods: {
    inputUpdated (e) {
      console.log(this.dataInput);
      this.$emit('input-typed', this.dataInput);
    },
    getData () {
      let codeList = [
          {input: this.dataInput, output: this.dataOutput}
      ]
      return codeList
    },
    cleanData(){
      this.dataInput = 0
      this.dataOutput = 0
    }
  }
  // mounted (){
  //   return this.codeList
  // }
}
</script>
