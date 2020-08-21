<template>

  <div class="comp">
    <table>
      <tr>
        <th>Nome</th>
        <th>Completa?</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{task.name}}</td>
        <td>{{task.completed ? 'SIM' : 'NÃO'}}</td>
      </tr>
    </table>
  </div>

</template>


<script>
export default {
  data(){
    return {
      tasks: [
        {name: 'Lavar louça', completed: true},
        {name: 'Lavar Carro', completed: false},
        {name: 'Lavar bike', completed: true},
        {name: 'Lavar banheiro', completed: false},
        {name: 'Varrer casa', completed: false},

      ]
    }
  }
}
</script>

<style scoped>
  .comp{
    border: 1px solid red;
  }
</style>
