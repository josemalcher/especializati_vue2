<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Parametro: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskComponent.vue",
  props: ['id'],
  data() {
    return {
      title: 'Lista de Tarefas'
    }
  }
}
</script>

<style scoped>

</style>
