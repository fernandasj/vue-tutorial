<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">
       {{hoje}}
      </p>
      <div class="has-text-right">
        <p class="card-header-title">{{tarefas.length}} tarefas</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <novo-todo @novaTarefa="adicionarTarefa"></novo-todo>
      </div>
      <div class="content">
        <todo-list :tarefas="tarefas" @check="checkTarefa" @remover="removerTarefa"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import NovoTodo from './NovoTodo'
import TodoList from './TodoList'

export default {
  name: 'todo-card',
  components: {
    NovoTodo,
    TodoList
  },
  data(){
    return{
      dias: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      tarefas: []
    }
  },
  computed: {
    hoje: function(){
      let novaData = new Date()
      return `${this.dias[novaData.getDay()]}, ${novaData.getDate()} de ${this.meses[novaData.getMonth()]}`
    }
  },
  methods:{
    adicionarTarefa(tarefa){
      let nova_tarefa = {'description': tarefa, 'checked': false}
      this.tarefas.push(nova_tarefa)
    },
    checkTarefa(index) {
      this.tarefas[index]['checked'] = !this.tarefas[index]['checked']
    },
    removerTarefa(index){
      this.tarefas.splice(index,1)
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
