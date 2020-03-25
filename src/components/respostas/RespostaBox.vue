<template>
    <form-wizard>
        <tab-content
            v-for="question in questions"
            :key="question.idCodeAnswer"
            title="Personal details"
        >
            <div v-if="question.type == 'Algoritmo'">
                <RespostaAlgoritmo :question_data="question"></RespostaAlgoritmo>
            </div>
            <div v-else-if="question.type == 'Objetiva'"></div>
            <div v-else-if="question.type == 'Subjetiva'"></div>
        </tab-content>
    </form-wizard>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import RespostaAlgoritmo from "./RespostaAlgoritmo";
import RespostaObjetiva from "./RespostaObjetiva";
import RespostaSubjetiva from "./RespostaSubjetiva";

import "vue-form-wizard/dist/vue-form-wizard.min.css";

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
            questions: [
                {
                    idCodeAnswer: "fada0715-123b-4753-954f-182e4fe1881f",
                    question: {
                        idQuestion: "e112a58a-25f1-46ca-8d48-d29b42cc5897",
                        headQuestion: "olha lá",
                        type: "Algoritmo",
                        discipline: "991eadd2-ea2a-4fe1-a598-36598e945408"
                    },
                    inputCode: "3 2",
                    outputCode: "5"
                }
            ]
        };
    },
    created() {
        this.$emit("created");
    }
};
</script>

<style>
</style>