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
                                <label class="label has-text-left">{{data.question.headQuestion }}</label>
                            </div>
                            <div class="colunm">
                                <table
                                    class="table is-bordered"
                                    style="width: 100px; margin-left:35%"
                                >
                                    <thead>
                                        <tr>
                                            <th class="is-dark">
                                                <abbr>Entrada</abbr>
                                            </th>
                                            <th class="is-dark">
                                                <abbr>Saída</abbr>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{data.question.inputCode}}</td>
                                            <td>{{data.question.outputCode}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="column">
                                <div class="field">
                                    <label class="label has-text-left">Resposta:</label>
                                </div>
                                <textarea
                                    class="textarea is-primary"
                                    rows="5"
                                    placeholder="Digite aqui o seu algoritmo resposta..."
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
                idCodeAnswer: "",
                question: {
                    idQuestion: "",
                    headQuestion: "",
                    typeQuestion: "",
                    get_typeQuestion_display: "",
                    discipline: "",
                    inputCode: "",
                    outputCode: ""
                }
            },
            answerQuestion: "",
            blockButton: false
        };
    },
    methods: {
        updateData(data) {
            this.data = {
                idCodeAnswer: data.idCodeAnswer,
                question: {
                    idQuestion: data.question.idQuestion,
                    headQuestion: data.question.headQuestion,
                    typeQuestion: data.question.typeQuestion,
                    get_typeQuestion_display:
                        data.question.get_typeQuestion_display,
                    discipline: data.question.discipline,
                    inputCode: data.inputCode,
                    outputCode: data.outputCode
                }
            };
            console.log(this.data.question);
        },
        onSubmitAnswer() {
            this.blockButton = true;
            this.saveQuestion();
        },
        async saveQuestion() {
            // e.preventDefault();
            this.$axios
                .post(`${this.$env.SERVER_URI}/answers/`, {
                    textAnswer: btoa(this.answerQuestion),
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
        this.$axios
            .get(
                `${API_BASE_URL}/questions/${this.$props.questionData.idQuestion}/codes`
            )
            .then(response => {
                this.updateData(response.data[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style>
</style>
