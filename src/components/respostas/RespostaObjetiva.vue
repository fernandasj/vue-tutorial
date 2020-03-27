<template>
    <div class="card">
        <header class="card-header">
            <p
                class="control is-expanded card-header-title has-text-centered"
            >Avaliação de Algoritmo</p>
        </header>

        <!-- CARD INPUTS -->
        <div class="card-content">
            <section class="card-body">
                <div class="content">
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label has-text-left">{{data.question.headQuestion}}</label>
                            </div>
                            <div class="column">
                                <div class="field">
                                    <div class="control">
                                        <div v-for="alternative in data.alternatives">
                                            <label class="radio">
                                                <input
                                                    type="radio"
                                                    name="alternativas"
                                                    :value="alternative.idChoice"
                                                    v-model="answerQuestion"
                                                    required
                                                />
                                                {{alternative.textChoice}}
                                            </label>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="card-footer">
                <div class="field is-grouped" style="margin-left:26%; margin-top:2%">
                    <p class="control">
                        <button class="button is-black" v-on:click="onSubmitAnswer">Enviar</button>
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <!-- CARD INPUTS end -->
</template>
<script>
// const API_BASE_URL = "http://32173c57.ngrok.io/api";
const API_BASE_URL = "http://127.0.0.1:8000/api";
export default {
    props: ["questionData"],
    data() {
        return {
            data: {
                question: {
                    idQuestion: "",
                    headQuestion: "",
                    typeQuestion: "",
                    get_typeQuestion_display: "",
                    discipline: ""
                },
                alternatives: []
            },
            answerQuestion: ""
        };
    },
    methods: {
        updateData(alternatives) {
            this.data = {
                question: {
                    idQuestion: this.$props.questionData.idQuestion,
                    headQuestion: this.$props.questionData.headQuestion,
                    typeQuestion: this.$props.questionData.typeQuestion,
                    get_typeQuestion_display: this.$props.questionData
                        .get_typeQuestion_display,
                    discipline: this.$props.questionData.discipline
                },
                alternatives: alternatives
            };
        },
        onSubmitAnswer() {
            this.saveQuestion();
        },
        async saveQuestion() {
            // TODO: enviar resposta para API
            console.log(
                "Salvando resposta " +
                    this.answerQuestion +
                    ", para questão " +
                    this.data.question.idQuestion +
                    " em background!"
            );
        }
    },
    created: function() {
        this.$axios
            .get(
                `${API_BASE_URL}/questions/${this.$props.questionData.idQuestion}/choices`
            )
            .then(response => {
                console.log(response.data);
                this.updateData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style>
</style>
