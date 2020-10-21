<template>
  <div>
    <h1 v-text="title"></h1>
    <form @submit.prevent="onSubmit">
      <input type="text"placeholder="Informe o CEP" v-model="cep">
      <button type="submit">Buscar CEP </button>
      <div v-if="error != ''">
        <p>{{error}}</p>
      </div>
      <div v-if="preloader">
        <img src="../assets/ajax-loader.gif" alt="Carregando...">
      </div>
      <div v-show="address.bairro">
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
      address:{},
      preloader: false,
      error: '',
    }
  },
  methods:{
    onSubmit(){
      this.reset();
      this.preloader  = true

      // GET /someUrl
      this.$http.get('https://api.postmon.com.br/v1/cep/'+this.cep)
        .then(response => {
          this.address = response.body;
      }, response => {
          this.error = 'ERRO NO CEP'
      }).finally(()=>{
        this.preloader = false
      });
    },
    reset(){
      this.error      = ''
      this.address    = {}
    }
  }
}
</script>

<style scoped>

</style>
