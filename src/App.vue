<template>
  <div id="app">
     <section class="hero is-primary is-bold is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                ProjectX
              </a>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <questao-view-card></questao-view-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>ProjectX</strong> by <a href="http://github.com/fernandasj">Fernanda Vieira</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import QuestaoViewCard from './components/QuestaoViewCard'

export default {
  name: 'app',
  components: {
    QuestaoViewCard
  },
  data () {
    return {
    }
  },
  mounted: function () {
    console.log(this.$http)
  }
}
</script>

<style>
</style>
