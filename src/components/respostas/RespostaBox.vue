<template>
    <form-wizard
        v-if="testNotFound"
        title
        subtitle
        step-size="xs"
        @on-complete="onComplete"
        color="#363636"
    >
        <tab-content title v-for="question in questions" :key="question.idQuestion">
            <div v-if="question.typeQuestion == 2">
                <RespostaAlgoritmo v-bind:questionData="question" :idTest="idTest"/>
            </div>
            <div v-else-if="question.typeQuestion == 0">
                <RespostaObjetiva v-bind:questionData="question" :idTest="idTest"/>
            </div>
            <div v-else-if="question.typeQuestion == 1">
                <RespostaSubjetiva v-bind:questionData="question" :idTest="idTest"/>
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
// const API_BASE_URL = "http://32173c57.ngrok.io/api";

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
            idTest: "",
            questions: [],
            testNotFound: false,
        };
    },
    methods: {
        updateData(data) {
            this.testNotFound = true;
            this.questions = data.questions;
        },
        onComplete: function() {
            alert("Yay. Test Done!");
            this.$router.push({ path: "/tests" });
        }
    },
    created: function() {
        this.idTest = this.$route.query.test;
        this.$axios
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
