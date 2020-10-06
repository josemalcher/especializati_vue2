<template>
<div>
  <h2 v-text="title"></h2>
  <app-question></app-question>
</div>
</template>

<script>
import Question from "./Question";
export default {
name: "Quiz",
  data(){
  return{
      title: 'QUIZ',
  }
  },
  components:{
    'app-question': Question
  }
}
</script>

<style scoped>

</style>
