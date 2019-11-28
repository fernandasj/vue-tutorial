<template>
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-left">
            <input class="input is-primary has-text-centered" type="text" placeholder="Nova questão...cabeçalho" v-model="questao">
      </p>
      <div class="has-text-right card-header-title">
        <div class="select is-rounded is-primary">
          <select>
            <option>Tipo</option>
            <option>Objetiva</option>
            <option>Subjetiva</option>
            <option>Algoritmo</option>
          </select>
        </div>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <questao-card @novaQuestao="adicionarQuestao"></questao-card>
      </div>
      <div class="content">
        <questao-list :questoes="questoes" @check="checkQuestao" @remover="removerQuestao"></questao-list>
      </div>
    </div>
  </div>
</template>

<script>
import QuestaoCard from './QuestaoCard'
import QuestaoList from './QuestaoList'

export default {
  name: 'questao-view-card',
  components: {
    QuestaoCard,
    QuestaoList
  },
  data(){
    return{
      // dias: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      // meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      questoes: []
    }
  },
  computed: {
    // hoje: function(){
    //   let novaData = new Date()
    //   return `${this.dias[novaData.getDay()]}, ${novaData.getDate()} de ${this.meses[novaData.getMonth()]}`
    // }
  },
  methods:{
    adicionarQuestao(questao){
      let nova_questao = {'description': questao, 'checked': false}
      this.questoes.push(nova_questao)
    },
    checkQuestao(index) {
      this.questoes[index]['checked'] = !this.questoes[index]['checked']
    },
    removerQuestao(index){
      this.questoes.splice(index,1)
    }
  }
}
</script>

<style>
.card {
  border-radius: 10px;
}
.card-header-title {
  color: #636368;
}
</style>
