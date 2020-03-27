<template>
    <form-wizard title subtitle>
        <div v-for="question in questions" :key="question.idQuestion">
            <tab-content title>
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
        </div>
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
                    idQuestion: "a1ee0891-29c2-44ec-91ec-d5f122246013",
                    headQuestion: "Subtraia dois números",
                    typeQuestion: 2,
                    get_typeQuestion_display: "Algoritmo",
                    discipline: "991eadd2-ea2a-4fe1-a598-36598e945408"
                },
                {
                    idQuestion: "5aa81d18-f7ef-4500-b2ee-19c8478ab7fd",
                    headQuestion: "Defina o que é um algoritmo",
                    typeQuestion: 1,
                    get_typeQuestion_display: "Subjetiva",
                    discipline: "991eadd2-ea2a-4fe1-a598-36598e945408"
                },
                {
                    idQuestion: "8d09997e-fd49-4e54-9e87-911aa552a2a3",
                    headQuestion:
                        "Assinale a alternativa que diz respeito a um desvio condicional:",
                    typeQuestion: 0,
                    get_typeQuestion_display: "Objetiva",
                    discipline: "991eadd2-ea2a-4fe1-a598-36598e945408"
                },
                {
                    idQuestion: "51c72cad-89b4-485a-b9ce-1cc950c9db6d",
                    headQuestion: "Some dois números inteiros",
                    typeQuestion: 2,
                    get_typeQuestion_display: "Algoritmo",
                    discipline: "991eadd2-ea2a-4fe1-a598-36598e945408"
                }
            ]
        };
    }
};
</script>

<style>
</style>