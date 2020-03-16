<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Adicionar Questão</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="content">
                    <div class="columns">
                        <div class="column is-one-quarter">
                            <label class="label">Tipo da Questão</label>
                        </div>
                        <div class="column is-one-quarter">
                            <div class="field is-primary">
                                <div class="select is-primary">
                                    <select @change="typeUpdated">
                                        <option value="-1">Tipo</option>
                                        <option value="0">Objetiva</option>
                                        <option value="1">Subjetiva</option>
                                        <option value="2">Algoritmo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-fifth">
                            <label class="label has-text-left">Disciplina</label>
                        </div>
                        <div class="column">
                            <div class="select field is-primary">
                                <select v-model="discipline">
                                    <option
                                        v-for="disc in disciplines"
                                        :value="disc.idDiscipline"
                                    >{{ disc.name }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label has-text-left">Cabeçalho da Questão</label>
                                <textarea
                                    class="textarea is-primary"
                                    rows="3"
                                    placeholder="Cabeçalho da questão"
                                    v-model="headQuestion"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <!--corpo da qestao-->
                    <questao-objetiva v-show="type === '0'"></questao-objetiva>
                    <questao-subjetiva v-show="type === '1'"></questao-subjetiva>
                    <questao-algoritmo
                        ref="qstAlg"
                        v-show="type === '2'"
                        :input="input"
                        :output="output"
                    ></questao-algoritmo>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button type="submit" class="button is-black" @click="formSubmitQuestion">Savar</button>
                <button class="button is-dark" @click="destroy">Cancelar</button>
            </footer>
        </div>
    </div>
</template>

<script>
import QuestaoObjetiva from "./QuestaoObjetiva";
import QuestaoSubjetiva from "./QuestaoSubjetiva";
import QuestaoAlgoritmo from "./QuestaoAlgoritmo";

export default {
    name: "questao-card",
    components: {
        QuestaoObjetiva,
        QuestaoSubjetiva,
        QuestaoAlgoritmo
    },
    data() {
        return {
            type: "-1",
            headQuestion: "",
            discipline: null,
            disciplines: null,
            input: null,
            output: null,
            choices: []
        };
    },
    mounted() {
        this.getDisciplines();
    },
    methods: {
        formatList(choiceData) {
            const data = [
                choiceData.alternatives.choice1,
                choiceData.alternatives.choice2,
                choiceData.alternatives.choice3,
                choiceData.alternatives.choice4,
                choiceData.alternatives.choice5
            ];
            let index = 1;
            data.forEach(element => {
                if (index == choiceData.correctChoice) {
                    this.choices.push({
                        textChoice: element,
                        correct: true
                    });
                } else {
                    this.choices.push({
                        textChoice: element,
                        correct: false
                    });
                }
                index++;
            });
        },
        destroy() {
            this.$emit("hide");
        },
        typeUpdated(event) {
            this.type = event.target.value;
        },
        inputTyped(e) {
            this.input = e;
            console.log("Card: " + this.input);
        },
        getDisciplines() {
            this.$axios
                .get("http://127.0.0.1:8000/api/disciplines/")
                .then(response => {
                    console.log(response);
                    this.disciplines = response.data.results;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        formSubmitQuestion(e) {
            e.preventDefault();
            this.formatList(this.$store.getters.getChoiceData);

            let codes = this.$refs.qstAlg.getData();
            console.log(codes[0]["input"]);
            let currentObj = this;
            this.$axios
                .post("http://localhost:8000/api/questions/", {
                    headQuestion: this.headQuestion,
                    typeQuestion: this.type,
                    discipline: this.discipline,
                    input: codes[0]["input"],
                    output: codes[0]["output"],
                    choices: this.choices
                })
                .then(response => {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>
.input {
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0;
    outline: none;
    border-bottom-width: 2px;
    box-shadow: none;
}
.input.is-primary:focus {
    box-shadow: none;
}
.add-button {
    border-radius: 50%;
}
</style>
