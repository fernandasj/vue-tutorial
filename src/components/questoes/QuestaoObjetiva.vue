<template>
    <div class="field">
        <p class="control field is-expanded has-text-left">
            <label class="label">Alternativa 1</label>
            <input
                v-model="alternatives.choice1"
                class="input is-primary"
                placeholder="Alternativa 1"
            />
        </p>
        <p class="control field is-expanded has-text-left">
            <label class="label">Alternativa 2</label>
            <input
                v-model="alternatives.choice2"
                class="input is-primary"
                placeholder="Alternativa 2"
            />
        </p>
        <p class="control field is-expanded has-text-left">
            <label class="label">Alternativa 3</label>
            <input
                v-model="alternatives.choice3"
                class="input is-primary"
                placeholder="Alternativa 3"
            />
        </p>
        <p class="control field is-expanded has-text-left">
            <label class="label">Alternativa 4</label>
            <input
                v-model="alternatives.choice4"
                class="input is-primary"
                placeholder="Alternativa 4"
            />
        </p>
        <p class="control field is-expanded has-text-left">
            <label class="label">Alternativa 5</label>
            <input
                v-model="alternatives.choice5"
                class="input is-primary"
                placeholder="Alternativa 5"
            />
        </p>

        <div class="control has-text-left">
            <label class="label">Resposta esperada</label>
            <div class="select field is-primary">
                <select v-model="correctChoice" @change="onChange()">
                    <option value="1">Alternativa 1</option>
                    <option value="2">Alternativa 2</option>
                    <option value="3">Alternativa 2</option>
                    <option value="4">Alternativa 4</option>
                    <option value="5">Alternativa 5</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "questao-objetiva",

    data() {
        return {
            alternatives: [
                {
                    choice1: null,
                    choice2: null,
                    choice3: null,
                    choice4: null,
                    choice5: null
                }
            ],
            correctChoice: null
        };
    },
    methods: {
        onChange() {
            var alternatives = this.alternatives;
            var correctChoice = this.correctChoice;

            console.log("alternativas" + alternatives);
            console.log("alternativa correta" + correctChoice);

            this.$store.dispatch("choiceDataAction", {
                alternatives,
                correctChoice
            });
        },
        submitChoices(id) {
            let currentObj = this;
            this.$axios
                .post(`${this.$env.SERVER_URI}/choices/`, {
                    headQuestion: this.headQuestion,
                    typeQuestion: this.type,
                    discipline: this.discipline
                })
                .then(function(response) {
                    currentObj.output = response.data;
                    idQuestion = currentObj.output.idQuestion;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>
<style>
</style>
