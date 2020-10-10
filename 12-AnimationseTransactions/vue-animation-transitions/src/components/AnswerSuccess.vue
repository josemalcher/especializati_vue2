<template>
  <div class="alert alert-success text-center">
    <h1>{{ title }}</h1>
    <hr>
    <p>Sucesso na Resposta!</p>
    <button @click="nexstQuestion" class="btn btn-primary">Proxima Pergunta</button>
  </div>
</template>

<script>
export default {
  name: "AnswerSuccess",
  data() {
    return {
      title: 'SUCESSO!'
    }
  },

  methods: {
    nexstQuestion() {
      this.$emit('changeMode');
    }
  }
}
</script>

<style scoped>

</style>
