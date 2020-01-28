<template>
  <div class="modal" style="z-index: 5;">
    <div class="modal-background"></div>
    <div class="modal-card">
      <!-- <header class="modal-card-head">
        <p class="modal-card-title">Questões</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
          <div class="row">
            <div class="columns">
              <div class="column">
                <div class="field is-grouped" v-for="questao in questoes">
                  <p class="control">
                    <a class="button is-dark is-small">
                      <span class="icon is-small">
                        <i class="fas fa-question-circle"></i>
                      </span>
                    </a>
                  </p>
                  <p class="control is-expanded">{{ questao.headQuestion }}</p>
                  <p class="control is-expanded">{{ questao.type }}</p>
                  <p class="control">
                    <a
                      class="button is-link is-small"
                      style="border-radius: 50%;"
                      v-on:click="oi(questao.idQuestion)"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-eye"></i>
                      </span>
                    </a>
                  </p>
                  <p class="control">
                    <a
                      class="button is-info is-small"
                      style=" border-radius: 50%;"
                      @click="editQuestion(questao.idQuestion)"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-pen"></i>
                      </span>
                    </a>
                  </p>
                  <p class="control">
                    <a
                      class="button is-danger is-small"
                      style=" border-radius: 50%;"
                      @click="deleteQuestion(questao.idQuestion)"
                    >
                      <span class="icon is-small">
                        <i class="fa fa-trash"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <questao-view-card></questao-view-card>
    </div>
  </div>
</template>
<script>
import QuestaoViewCard from "../questoes/QuestaoViewCard"

export default {
  name: "question-list-test",
  components: {
    QuestaoViewCard
  },
};
</script>
<style>

</style>
