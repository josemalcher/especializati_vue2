<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <p>ERRO na Resposta!</p>

    <button @click="nexstQuestion">Proxima Pergunta</button>
  </div>
</template>

<script>
export default {
  name: "AnswerError",
  data() {
    return {
      title: 'Errada'
    }
  },
  methods:{
    nexstQuestion(){
      this.$emit('changeMode');
    }
  }
}
</script>

<style scoped>

</style>
