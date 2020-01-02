<template>
  <!-- CARD LIST -->
  <div class="card">
    <header class="card-header">
      <p class="control is-expanded card-header-title has-text-centered">Exams</p>
    </header>

    <!-- exams -->
    <div class="card-content">
      <div class="content">
        <div class="row">
          <div class="columns">
            <div class="column">
              <div class="field is-grouped" v-for="testStudents in tests">
                <p class="control">
                  <a class="button is-dark is-small">
                    <span class="icon is-small">
                      <i class="fas fa-file-alt"></i>
                    </span>
                  </a>
                </p>
                <p class="control is-expanded">{{ testStudents.test }}</p>
                <p class="control is-expanded">{{ testStudents.scores }}</p>
                <p class="control is-expanded">{{ testStudents.test.discipline }}</p>
                <p class="control" v-if="testStudents.timeFinish != null">
                  <button class="button is-small is-success">
                    <span class="icon is-small">
                      <i class="fas fa-check"></i>
                    </span>
                    <span>Done</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- exams end -->
  </div>
  <!-- CARD LIST end -->
</template>
<script>
export default {
  name: "test-student-card-view",
  data() {
    return {
      tests: null,
    }
  },
  mounted() {
    this.getTests()
  },
  methods: {
    getTests () {
      this.$axios
        .get('http://127.0.0.1:8000/api/testStudents/')
        .then(response => {
          console.log(response)
          this.tests = response.data.results
        })
        .catch(error => {
         console.log(error)
        })
    }
  }
}
</script>
