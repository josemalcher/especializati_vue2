<template>
  <div>
    <form>
      <input type="text" placeholder="Nome">
      <hr>
      <input type="text" placeholder="E-mail">
      <hr>
      <input type="text" placeholder="Idade">
      <hr>
      <input type="radio" name="sexo" value="M"> Masculino |
      <input type="radio" name="sexo" value="F"> Feminino
      <hr>
      <select name="estado" id="estado">
        <option value="">Selecione o Estado</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiri</option>
        <option value="MG">Minas Gerais</option>
      </select>
      <hr>
      <label for="agree">Concordo com os termos de uso</label>
      <input type="checkbox" id="agree">
      <hr>
      <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
      <hr>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>

</style>
