<template>
  <div>
    <h2>{{ title }}</h2>

    <form action="" class="form form-inline" @submit.prevent="save">
      <input type="text" placeholder="Nome Tarefa" class="form-control" v-model="task.name">
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

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
        <td>{{ task.id }}</td>
        <td>{{ task.name }}</td>
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
      tasks: [],
      task: {
        id:   '',
        name: ''
      }
    }
  },
  methods: {
    save() {
      this.task.id = this.tasks.length + 1

      this.tasks.push(this.task);

      this.task={
        id: '',
        name: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  margin: 20px
}
</style>
