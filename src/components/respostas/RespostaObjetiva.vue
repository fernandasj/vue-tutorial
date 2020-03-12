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
                >Dentre as alternativas abaixo, escolha a que indica desvio condicional:</label>
              </div>
              <div class="column">
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="alternativas"/>
                      For
                    </label><br>
                    <label class="radio">
                      <input type="radio" name="alternativas"/>
                      While
                    </label><br>
                    <label class="radio">
                      <input type="radio" name="alternativas"/>
                      If-Else
                    </label><br>
                    <label class="radio">
                      <input type="radio" name="alternativas"/>
                      Print
                    </label><br>
                    <label class="radio">
                      <input type="radio" name="alternativas"/>
                      Return
                    </label><br>
                  </div>
                </div>
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
