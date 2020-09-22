<template>
  <div class="container">
    <div>
      <h2>{{ title }}</h2>
      <div class="row">
        <div class="col">
          <form action="" class="form form-inline">
            <input type="text" class="form-control" placeholder="Encontrar" v-model="filter">
          </form>
        </div>
        <div class="col">
          <form action="" class="form form-inline" @submit.prevent="onSubmit">
            <input type="text" placeholder="Nome Tarefa" class="form-control" v-model="task.name">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>


      <div class="row">
        <div class="col">
          <table class="table tab-content">
            <thead>
            <tr>
              <th>ID.</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(task, index) in filteredItems" :key="index">
              <td>{{ task.id }}</td>
              <td>{{ task.name }}</td>
              <td>
                <a href="#" @click.prevent="edit(task.id)" class="btn btn-info">Editar</a>
                <a href="#" @click.prevent="deleteTask(task.id)" class="btn btn-danger">Apagar</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lista de Tarefas",
      tasks: [],
      task: {
        id: '',
        name: ''
      },
      updating: false,
      updateIndex: '',
      filter: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.updating) {
        this.update();
        return
      }
      this.save();
    },
    save() {
      this.task.id = this.tasks.length + 1

      this.tasks.push(this.task);
      this.clearForm();
    },
    edit(id) {
      this.updateIndex  = this.findIndexItem(id);

      this.task = this.tasks[this.updateIndex];

      this.updating = true;
    },
    update() {
      this.tasks[this.updateIndex] = this.task;
      this.updating = false;
      this.clearForm();
    },
    clearForm() {
      this.task = {
        id: '',
        name: ''
      }
    },
    deleteTask(id) {
      this.tasks.splice(this.findIndexItem(id), 1);
    },
    findIndexItem(id){
      for (let index = 0; index < this.tasks.length; index++) {
        if (this.tasks[index].id == id) {
          return index;
        }
      }
    }
  },
  computed: {
    filteredItems() {
      if (this.filter === '') {
        return this.tasks
      }
      let vm = this;
      return this.tasks.filter(task => {
        return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > -1;
      })
      /*return this.tasks.filter(task => {
        return task['name', 'id'].includes(vm.filter)
      })*/

    }
  }
}
</script>

<style scoped>
form {
  margin: 20px
}
</style>
