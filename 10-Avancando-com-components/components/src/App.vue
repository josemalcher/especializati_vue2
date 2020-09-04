<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <TasksComponents @callParent="answerSon" :title="'Título no APP'" :items="['lavar', 'cozinhar', 'passar']"></TasksComponents>

    <ListItemsComponent :title="'Listagem de Algo'"
                        :items="['val 1', 'val 2']"></ListItemsComponent>
  </div>
</template>

<script>

import TasksComponents from "./components/TasksComponents";
import ListItemsComponent from "./components/ListItemsComponent";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    answerSon(){
      alert("Responde FILHO")
    }
  },
  components:{
    TasksComponents,
    ListItemsComponent
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
