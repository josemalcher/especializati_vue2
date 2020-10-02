<template>
  <div>
    <h2 v-text="question"></h2>
  </div>
</template>

<script>
export default {
  name: "Question",
  data(){
    return{
      title:{
        title: 'Question',
        question: 'Gerando pergunta...'
      }
    }
  }
}
</script>

<style scoped>

</style>
