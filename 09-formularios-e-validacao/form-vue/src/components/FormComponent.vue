<template>
  <div>
    <form @submit.prevent="saveData">
      <div :class="{'is-danger': errors.has('name')}">
        <input name="name" v-validate="'required|min:3|max:10'" type="text" placeholder="Nome" v-model="userData.name">
        {{userData.name}}
        <p v-if="errors.has('name')">
          {{ errors.first('name') }}
        </p>
      </div>
      <hr>
<!--      <input v-validate="'required|email'" type="text"  name="email" type="text" placeholder="E-mail" v-model="userData.email"> {{userData.email}}-->
      <!--<span>{{ errors.first('email') }}</span>-->
      <div :class="{'is-danger': errors.has('email')}">
        <input  name="email" v-validate="'required|email'" type="email" placeholder="Email" v-model="userData.email">
        <p v-if="errors.has('email')">
          {{ errors.first('email') }}
        </p>
      </div>
      <hr>
      <input type="text" placeholder="Idade" v-model.number="userData.age"> {{userData.age}}
      <hr>
      <input type="radio" name="sexo" value="M" v-model="userData.sexo"> Masculino |
      <input type="radio" name="sexo" value="F" v-model="userData.sexo"> Feminino
      <p v-if="userData.sexo">Sexo Selecionado: {{userData.sexo}}</p>
      <hr>
      <select name="estado" id="estado" v-model="userData.estado">
        <option value="">Selecione o Estado</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiri</option>
        <option value="MG">Minas Gerais</option>
      </select>
      <p v-if="userData.estado">Estado Selecionado {{userData.estado}}</p>
      <hr>
      <label for="agree">Concordo com os termos de uso</label>
      <input type="checkbox" id="agree" v-model="terms">
      <hr>
      <textarea name="textarea" id="textarea" cols="30" rows="10" v-model="description"></textarea>
<!--      <div style="white-space: pre;" v-text="description">-->
<!--      <div style="white-space: pre;" v-html="description">-->
<!--        {{description}}-->
      <div>
        <pre v-html="description">

        </pre>
      </div>
      <hr>
      <button type="submit">Enviar</button>
    </form>
    <div v-show="isSubmited">
      {{userData}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userData:{
        name:  '',
        email: '',
        age:   '',
        sexo:  '',
        estado: ''
      },
      terms: true,
      description: '',
      isSubmited: false,
    }
  },
  methods:{
    saveData(){
      this.$validator.validateAll().then((result) => {
        if(result){
//          alert("Form Submited");
          this.isSubmited = true;
          return;
        }
        alert('Correct them erros');
      });
    }
  }
}

</script>

<style scoped>
.is-danger{
  border: 1px solid red;
}
.is-danger p{
  color: red;
}
</style>
