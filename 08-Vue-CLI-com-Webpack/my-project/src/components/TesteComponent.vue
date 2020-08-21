<template>
  <div>
    <p>TESTE ok</p>
    <p>Component: </p>
    <FormComponent></FormComponent>

    <h3>{{msg}}</h3>

  </div>
</template>

<script>

import FormComponent from "./FormComponent";

export default {
  data(){
    return{
      msg: "Curso de VUE"
    }
  },
  components:{
    FormComponent
  }
}
</script>

<style scoped>
p{
  color: red;
}
</style>

