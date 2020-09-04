<template>
  <div>
    <h2>{{ title }}</h2>

    <button @click="callParent">Chamar Pai</button>

    <ul>
      <li v-for="(item,index) in items">{{item}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "TasksComponents",
  props:['items', 'title'],
  data (){
    return {
      //title: "Lista de Tarefas"
    }
  },
  methods:{
    callParent(){
      alert("CHAMA PAI")
      this.$emit('callParent')
    }
  }
}
</script>

<style scoped>

</style>
