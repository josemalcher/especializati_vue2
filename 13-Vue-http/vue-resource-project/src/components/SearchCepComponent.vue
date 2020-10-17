<template>
  <div>
    <h1 v-text="title"></h1>
    <form @submit.prevent="onSubmit">
      <input type="text"placeholder="Informe o CEP" v-model="cep">
      <button type="submit">Buscar CEP </button>

      <div v-show="address.bairro != ''">
        <p><b>Bairro: </b>{{address.bairro}}</p>
        <p><b>Cidade: </b>{{address.cidade}}</p>
        <p><b>Logradouro: </b>{{address.logradouro}}</p>
        <p><b>CEP: </b>{{address.cep}}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchCepComponent",
  data() {
    return {
      title: "Busca CEP com Vue JS",
      cep: '',
      address:{
        bairro:''
      }
    }
  },
  methods:{
    onSubmit(){
      // GET /someUrl
      this.$http.get('https://api.postmon.com.br/v1/cep/'+this.cep)
        .then(response => {
          this.address = response.body;
          console.log(response.body)

      }, response => {
        console.log(error)
      });
    }
  }
}
</script>

<style scoped>

</style>
