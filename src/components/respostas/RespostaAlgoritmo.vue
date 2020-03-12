<template>
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-centered">Avaliação de Algoritmo</p>
    </header>

    <!-- CARD INPUTS -->
    <div class="card-content">
      <section class="card-body">
        <div class="content">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label
                  class="label has-text-left"
                >Implemente um programa que receba dois números inteiros como parâmetros, e imprima a soma dos mesmos.
                Siga os exemplos:</label>
              </div>
              <div class="colunm">
                <table class="table is-bordered" style="width: 100px; margin-left:35%">
                  <thead>
                    <tr>
                      <th class="is-dark">
                        <abbr>Entrada</abbr>
                      </th>
                      <th class="is-dark">
                        <abbr>Saída</abbr>
                      </th >
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 2</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>2 3</td>
                      <td>5</td>
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
                  rows="10"
                  placeholder="Digite aqui o seu algoritmo resposta..."
                  v-model="headQuestion"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="card-footer">
        <div class="field is-grouped" style="margin-left:26%; margin-top:2%">
          <p class="control">
            <button class="button is-light">Voltar</button>
          </p>
          <p class="control">
            <button class="button is-dark">Pular</button>
          </p>
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
export default {};
</script>
<style>
</style>
