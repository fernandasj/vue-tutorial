<template>
    <div class="card">
        <header class="card-header">
            <p
                class="control is-expanded card-header-title has-text-centered"
            >Resultado da Avaliação</p>
        </header>

        <!-- CARD INPUTS -->
        <div class="card-content">
            <section class="card-body">
                <div class="content">
                    <div v-for="result in results">
                        <div class="field has-text-left">
                            <h3 class="has-text-centered">{{result.test.name}}</h3>
                            <p>
                                <b>Aluno(a):</b>
                                {{result.student.name}}
                            </p>
                            <p>
                                <b>Professor(a):</b> Gustavo Soares Vieira
                            </p>
                            <p>
                                <b>Disciplina:</b>
                                {{result.test.discipline}}
                            </p>
                        </div>
                        <div class="tile is-vertical is-4" style="margin-left: 33%">
                            <article class="tile is-child notification is-dark">
                                <p class="subtitle is-3">Nota</p>
                                <p class="title is-1">{{result.scores}}</p>
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
                                <tr v-for="question in result.test.questions">
                                    <td>{{question.headQuestion}}</td>
                                    <td>{{question.get_typeQuestion_display}}</td>
                                    <td>
                                        <span class="tag is-dark">
                                            <b>Correta</b>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <footer class="card-footer">
                <div class="field is-grouped" style="margin-left:42%; margin-top:2%">
                    <p class="control">
                        <button class="button is-dark">Voltar</button>
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <!-- CARD INPUTS end -->
</template>
<script>
export default {
    name: "resultado",
    data() {
        return {
            results: []
        };
    },
    mounted() {
        this.getResults();
    },
    methods: {
        getResults() {
            let student = "02c68c7b-cbd0-4a92-8ce8-6af130b4ae9f";
            this.$axios
                .get(`${this.$env.SERVER_URI}/testStudents/${student}/result/`)
                .then(response => {
                    console.log(response);
                    this.results = response.data;
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
