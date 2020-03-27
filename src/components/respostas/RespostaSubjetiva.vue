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
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="card-footer">
                <div class="field is-grouped" style="margin-left:26%; margin-top:2%">
                    <p class="control">
                        <button class="button is-black">Enviar</button>
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <!-- CARD INPUTS end -->
</template>
<script>
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
                }
            },
            answerQuestion: ""
        };
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
        this.$axios
            .get(
                // "http://localhost:8000/alternatives"
                `${API_BASE_URL}/questions/${this.$props.questionData.idQuestion}/choices`
            )
            .then(response => {
                this.updateData(response.data.results);
            })
            .catch(error => {
                console.log(error);
                // this.$router.push({ path: "/tests" });
            });
    }
};
</script>
<style>
</style>
