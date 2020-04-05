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
                                    <label class="label has-text-left">Resposta:</label>
                                </div>
                                <textarea
                                    class="textarea is-primary"
                                    rows="5"
                                    placeholder="Digite aqui o seu texto resposta..."
                                    v-model="answerQuestion"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="card-footer">
                <div class="field is-grouped" style="margin-left:26%; margin-top:2%">
                    <p class="control">
                        <button
                            class="button is-black"
                            v-on:click="onSubmitAnswer"
                            :disabled="blockButton"
                        >Enviar</button>
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <!-- CARD INPUTS end -->
</template>
<script>
export default {
    props: ["questionData", "idTest"],
    data() {
        return {
            data: {
                question: {
                    idQuestion: "",
                    headQuestion: "",
                    typeQuestion: "",
                    get_typeQuestion_display: "",
                    discipline: ""
                }
            },
            answerQuestion: "",
            blockButton: false
        };
    },
    methods: {
        onSubmitAnswer() {
            this.blockButton = true;
            this.saveQuestion();
        },
        async saveQuestion() {
            this.$axios
                .post(`${this.$env.SERVER_URI}/answers/`, {
                    textAnswer: this.answerQuestion,
                    student: "02c68c7b-cbd0-4a92-8ce8-6af130b4ae9f",
                    test: this.idTest,
                    question: this.data.question.idQuestion,
                    choice: ""
                })
                .then(response => {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                    console.log(response);
                });
        }
    },
    created: function() {
        this.data = {
            question: {
                idQuestion: this.$props.questionData.idQuestion,
                headQuestion: this.$props.questionData.headQuestion,
                typeQuestion: this.$props.questionData.typeQuestion,
                get_typeQuestion_display: this.$props.questionData
                    .get_typeQuestion_display,
                discipline: this.$props.questionData.discipline
            }
        };
    }
};
</script>
<style>
</style>
