<template>
  <div>
    <h2>{{ title }}</h2>
    <table class="table table-responsive">
      <thead>
      <tr>
        <th>ID.</th>
        <th>Nome</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{task.id}}</td>
        <td>{{task.name}}</td>
        <td>
          <a href="" class="btn btn-info">Editar</a>
          <a href="" class="btn btn-danger">Apagar</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lista de Tarefas",
      tasks:[
        {id:12, name: "Lavar Carro"},
        {id:10, name: "Varrer casa"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
