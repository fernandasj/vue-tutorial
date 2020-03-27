<template>
    <form-wizard title subtitle step-size="xs" @on-complete="onComplete" color="#363636">
        <tab-content title v-for="question in questions" :key="question.idQuestion">
            <div v-if="question.typeQuestion == 2">
                <RespostaAlgoritmo v-bind:questionData="question" />
            </div>
            <div v-else-if="question.typeQuestion == 0">
                <RespostaObjetiva v-bind:questionData="question" />
            </div>
            <div v-else-if="question.typeQuestion == 1">
                <RespostaSubjetiva v-bind:questionData="question" />
            </div>
        </tab-content>
    </form-wizard>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import RespostaAlgoritmo from "./RespostaAlgoritmo";
import RespostaObjetiva from "./RespostaObjetiva";
import RespostaSubjetiva from "./RespostaSubjetiva";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export default {
    components: {
        FormWizard,
        TabContent,
        RespostaAlgoritmo,
        RespostaObjetiva,
        RespostaSubjetiva
    },
    data() {
        return {
            questions: []
        };
    },
    methods: {
        updateData(data) {
            this.questions = data.questions;
        },
        onComplete: function() {
            alert("Yay. Done!");
        }
    },
    created: function() {
        this.$axios
            // .get("http://localhost:8000/test")
            .get(`${API_BASE_URL}/tests/${this.$route.query.test}`)
            .then(response => {
                console.log(response.data.questions);
                this.updateData(response.data);
            })
            .catch(error => {
                console.log(error);
                alert(
                    "Test " + this.$route.query.test + " não foi encontrado."
                );
                this.$router.push({ path: "/tests" });
            });
    }
};
</script>

<style>
</style>